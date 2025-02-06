import { AddOrUpDateLogoService } from "../../Services/Logo/AddOrUpDataLogoService";
import { Request, Response } from 'express';
import { UploadedFile, FileArray } from 'express-fileupload';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

// Configuração do Cloudinary utilizando variáveis de ambiente
cloudinary.config({
    cloud_name: process.env., // Nome do Cloudinary
    api_key: process.env.CLOUDINARY_KEY, // Chave da API do Cloudinary
    api_secret: process.env.CLOUDINARY_SECRET // Chave secreta da API do Cloudinary
});

/**
 * Controlador responsável por adicionar ou atualizar um Logo.
 * Realiza o upload de um arquivo ao Cloudinary e salva a URL retornada no sistema.
 * 
 * @param req - Objeto da requisição HTTP do Express
 * @param res - Objeto da resposta HTTP do Express
 */
export async function AddOrUpDateLogoController(req: Request, res: Response) {
    // Verifica se há arquivos no request; se não houver, lança um erro.
    if (!req.files || Object.keys(req.files).length === 0) {
        throw new Error("Erro: Nenhum arquivo foi enviado.");
    }

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

        // Salva ou atualiza o Logo no sistema com a URL retornada do Cloudinary
        const product = await AddOrUpDateLogoService(resultFile.secure_url);

        // Retorna o produto atualizado como resposta
        res.json(product);
    } catch (error) {
        // Retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ error: "error.message" });
    }
}



// import { Request, Response } from "express";
// import { AddOrUpDateLogoService } from "../../Services/Logo/AddOrUpDataLogoService";

// export async function AddOrUpDateLogoController(req: Request, res: Response) {
//     try {
//         const { linck } = req.body;
         
//         if(!linck){
//             res.status(400).json({error: "Campo localização é obrigatorio!"})
//         }
//         const addOrUpDateLogoService = await AddOrUpDateLogoService(linck);
//         res.status(200).json(addOrUpDateLogoService)

//     } catch (error) {
//         res.status(200).json({error: "Error"})
//     }

// }