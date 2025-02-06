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
exports.addOrUpdateBannerController = addOrUpdateBannerController;
const AddOrUpDataBannerService_1 = require("../../Services/Banner/AddOrUpDataBannerService");
const cloudinary_1 = require("cloudinary");
// Configuração do Cloudinary utilizando variáveis de ambiente
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME, // Nome do Cloudinary
    api_key: process.env.CLOUDINARY_KEY, // Chave da API do Cloudinary
    api_secret: process.env.CLOUDINARY_SECRET // Chave secreta da API do Cloudinary
});
/**
 * Controlador responsável por adicionar ou atualizar um banner.
 * Realiza o upload de um arquivo ao Cloudinary e salva a URL retornada no sistema.
 *
 * @param req - Objeto da requisição HTTP do Express
 * @param res - Objeto da resposta HTTP do Express
 */
function addOrUpdateBannerController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Verifica se há arquivos no request; se não houver, lança um erro.
        if (!req.files || Object.keys(req.files).length === 0) {
            throw new Error("Erro: Nenhum arquivo foi enviado.");
        }
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
            // Salva ou atualiza o banner no sistema com a URL retornada do Cloudinary
            const product = yield (0, AddOrUpDataBannerService_1.addOrUpdateBanner)(resultFile.secure_url);
            // Retorna o produto atualizado como resposta
            res.json(product);
        }
        catch (error) {
            // Retorna uma resposta de erro com status 500 e a mensagem de erro
            res.status(500).json({ error: "error.message" });
        }
    });
}
//# sourceMappingURL=AddOrUpDataBannerController.js.map