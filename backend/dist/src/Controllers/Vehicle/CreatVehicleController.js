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
exports.CreatVehicleController = CreatVehicleController;
const CreatVehicleService_1 = require("../../Services/Vehicle/CreatVehicleService");
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
/**
 * Controlador responsável por criar um veículo.
 * Realiza o upload de arquivos para o Cloudinary e salva as URLs no sistema.
 */
function CreatVehicleController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Obtém os arquivos enviados
            const files = req.files;
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
            const fileUrls = yield Promise.all(requiredFiles.map((fileKey) => __awaiter(this, void 0, void 0, function* () {
                const file = files[fileKey];
                return uploadToCloudinary(file);
            })));
            // Extrai os campos do corpo da requisição
            const { model, mark_id, exchange_id, fuel_id, bodyWork_id, km, year, price, description_id } = req.body;
            // Valida os campos obrigatórios
            const missingFields = [];
            if (!model)
                missingFields.push("model");
            if (!mark_id)
                missingFields.push("mark_id");
            if (!exchange_id)
                missingFields.push("exchange_id");
            if (!fuel_id)
                missingFields.push("fuel_id");
            if (!bodyWork_id)
                missingFields.push("bodyWork_id");
            if (km === undefined || km === "")
                missingFields.push("km");
            if (!year)
                missingFields.push("year");
            if (price === undefined || price === "")
                missingFields.push("price");
            if (!description_id)
                missingFields.push("description_id");
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
            const creatVehicleService = yield (0, CreatVehicleService_1.CreatVehicleService)(model, mark_id, exchange_id, fuel_id, bodyWork_id, kmValue, year, priceValue, description_id, fileUrls[0], fileUrls[1], fileUrls[2], fileUrls[3], fileUrls[4] // Passa as URLs diretamente
            );
            res.status(200).json(creatVehicleService);
        }
        catch (error) {
            console.error("Erro no controller:", error);
            res.status(500).json({ error: "Erro interno no servidor." });
        }
    });
}
