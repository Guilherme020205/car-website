"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatContactController = CreatContactController;
const CreatContactService_1 = require("../../Services/Contatos/CreatContactService");
const cloudinary_1 = require("cloudinary");
// Configuração do Cloudinary utilizando variáveis de ambiente
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
// Função auxiliar para realizar o upload ao Cloudinary
function uploadToCloudinary(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader.upload_stream({}, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }).end(file.data);
        });
        if (!result || !result.secure_url) {
            throw new Error("Erro ao fazer upload no Cloudinary.");
        }
        return result.secure_url;
    });
}
function CreatContactController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Define explicitamente o tipo do `req.files` como `FileArray`
            const files = req.files;
            // Obtém o arquivo enviado identificado como 'file'
            const file = files['file'];
            // Realiza o upload do arquivo ao Cloudinary utilizando uma stream
            const resultFile = yield new Promise((resolve, reject) => {
                cloudinary_1.v2.uploader.upload_stream({}, (error, result) => {
                    if (error) {
                        reject(error); // Rejeita a promessa em caso de erro
                        return;
                    }
                    resolve(result); // Resolve a promessa com o resultado do upload
                }).end(file.data); // Envia os dados do arquivo para a stream
            });
            // Verifica se o resultado do upload é válido e possui uma URL segura
            if (!resultFile || !resultFile.secure_url) {
                throw new Error("Erro ao fazer upload no Cloudinary.");
            }
            const { name, number } = req.body;
            if (!name || !number) {
                res.status(400).json({ error: "Name and number are required." });
            }
            const creatContact = yield (0, CreatContactService_1.CreatContactService)(name, number, resultFile.secure_url);
            res.status(200).json(creatContact);
        }
        catch (err) {
            res.status(401).json({ err: "Erro" });
        }
    });
}
