import { Request, Response } from "express";
import { CreatVehicleService } from "../../Services/Vehicle/CreatVehicleService";
import { UploadedFile, FileArray } from 'express-fileupload';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

// Configuração do Cloudinary utilizando variáveis de ambiente
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "dts3okbt6", // Nome do Cloudinary
    api_key: process.env.CLOUDINARY_KEY || "261981328535743", // Chave da API do Cloudinary
    api_secret: process.env.CLOUDINARY_SECRET || "yhXPC9sQ26ry6pJomBwtvv0hRDE" // Chave secreta da API do Cloudinary
});

// Função auxiliar para realizar o upload ao Cloudinary
async function uploadToCloudinary(file: UploadedFile): Promise<string> {
    const result: UploadApiResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result as UploadApiResponse);
            }
        }).end(file.data);
    });

    if (!result || !result.secure_url) {
        throw new Error("Erro ao fazer upload no Cloudinary.");
    }

    return result.secure_url;
}

/**
 * Controlador responsável por criar um veículo.
 * Realiza o upload de arquivos para o Cloudinary e salva as URLs no sistema.
 */
export async function CreatVehicleController(req: Request, res: Response) {
    try {
        // Obtém os arquivos enviados
        const files = req.files as unknown as FileArray;

        // Verifica se os arquivos necessários foram enviados
        const requiredFiles = ['file1', 'file2', 'file3', 'file4', 'file5'];
        const missingFiles = requiredFiles.filter(file => !files[file]);

        if (missingFiles.length > 0) {
            res.status(400).json({
                error: `Arquivos ausentes: ${missingFiles.join(", ")}`
            });
            return; // Adiciona um return para evitar que o código continue após enviar a resposta
        }

        // Realiza o upload de todos os arquivos para o Cloudinary
        const fileUrls: string[] = await Promise.all(
            requiredFiles.map(async (fileKey) => {
                const file = files[fileKey] as UploadedFile;
                return uploadToCloudinary(file);
            })
        );

        // Extrai os campos do corpo da requisição
        const {
            model, mark_id, exchange_id, fuel_id, bodyWork_id,
            km, year, price, description_id
        } = req.body;

        // Valida os campos obrigatórios
        const missingFields = [];
        if (!model) missingFields.push("model");
        if (!mark_id) missingFields.push("mark_id");
        if (!exchange_id) missingFields.push("exchange_id");
        if (!fuel_id) missingFields.push("fuel_id");
        if (!bodyWork_id) missingFields.push("bodyWork_id");
        if (km === undefined || km === "") missingFields.push("km");
        if (!year) missingFields.push("year");
        if (price === undefined || price === "") missingFields.push("price");
        if (!description_id) missingFields.push("description_id");

        if (missingFields.length > 0) {
            res.status(400).json({
                error: `Campos ausentes: ${missingFields.join(", ")}`
            });
            return;
        }

        // Converte km e price para números
        const kmValue = parseInt(km, 10);
        const priceValue = parseInt(price, 10);

        // Passando as URLs individualmente e passando os valores convertidos para número
        const creatVehicleService = await CreatVehicleService(
            model, mark_id, exchange_id, fuel_id, bodyWork_id, kmValue, year,
            priceValue, description_id, fileUrls[0], fileUrls[1], fileUrls[2], fileUrls[3], fileUrls[4] // Passa as URLs diretamente
        );

        res.status(200).json(creatVehicleService);

    } catch (error) {
        console.error("Erro no controller:", error);
        res.status(500).json({ error: "Erro interno no servidor." });
    }
}
