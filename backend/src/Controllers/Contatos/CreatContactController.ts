import { Request, Response } from "express";
import { CreatContactService } from "../../Services/Contatos/CreatContactService";
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



export async function CreatContactController(req: Request, res: Response) {
    try {
        // Define explicitamente o tipo do `req.files` como `FileArray`
        const files = req.files as unknown as FileArray;

        // Obtém o arquivo enviado identificado como 'file'
        const file = files['file'] as UploadedFile;

        // Realiza o upload do arquivo ao Cloudinary utilizando uma stream
        const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, (error, result) => {
                if (error) {
                    reject(error); // Rejeita a promessa em caso de erro
                    return;
                }
                resolve(result as UploadApiResponse); // Resolve a promessa com o resultado do upload
            }).end(file.data); // Envia os dados do arquivo para a stream
        });

        // Verifica se o resultado do upload é válido e possui uma URL segura
        if (!resultFile || !resultFile.secure_url) {
            throw new Error("Erro ao fazer upload no Cloudinary.");
        }

        const { name, number } = req.body;

        if (!name || !number) {
            res.status(400).json({ error: "Name and number are required." })
        }

        const creatContact = await CreatContactService(name, number, resultFile.secure_url)
        res.status(200).json(creatContact)
    } catch (err) {
        res.status(401).json({ err: "Erro" })
    }

}