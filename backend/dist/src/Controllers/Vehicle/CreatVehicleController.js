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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatVehicleController = CreatVehicleController;
var CreatVehicleService_1 = require("../../Services/Vehicle/CreatVehicleService");
var cloudinary_1 = require("cloudinary");
// Configuração do Cloudinary utilizando variáveis de ambiente
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
// Função auxiliar para realizar o upload ao Cloudinary
function uploadToCloudinary(file) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                            if (error) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        }).end(file.data);
                    })];
                case 1:
                    result = _a.sent();
                    if (!result || !result.secure_url) {
                        throw new Error("Erro ao fazer upload no Cloudinary.");
                    }
                    return [2 /*return*/, result.secure_url];
            }
        });
    });
}
/**
 * Controlador responsável por criar um veículo.
 * Realiza o upload de arquivos para o Cloudinary e salva as URLs no sistema.
 */
function CreatVehicleController(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var files_1, requiredFiles, missingFiles, fileUrls, _a, model, mark_id, exchange_id, fuel_id, bodyWork_id, km, year, price, description_id, missingFields, kmValue, priceValue, creatVehicleService, error_1;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    files_1 = req.files;
                    requiredFiles = ['file1', 'file2', 'file3', 'file4', 'file5'];
                    missingFiles = requiredFiles.filter(function (file) { return !files_1[file]; });
                    if (missingFiles.length > 0) {
                        res.status(400).json({
                            error: "Arquivos ausentes: ".concat(missingFiles.join(", "))
                        });
                        return [2 /*return*/]; // Adiciona um return para evitar que o código continue após enviar a resposta
                    }
                    return [4 /*yield*/, Promise.all(requiredFiles.map(function (fileKey) { return __awaiter(_this, void 0, void 0, function () {
                            var file;
                            return __generator(this, function (_a) {
                                file = files_1[fileKey];
                                return [2 /*return*/, uploadToCloudinary(file)];
                            });
                        }); }))];
                case 1:
                    fileUrls = _b.sent();
                    _a = req.body, model = _a.model, mark_id = _a.mark_id, exchange_id = _a.exchange_id, fuel_id = _a.fuel_id, bodyWork_id = _a.bodyWork_id, km = _a.km, year = _a.year, price = _a.price, description_id = _a.description_id;
                    missingFields = [];
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
                            error: "Campos ausentes: ".concat(missingFields.join(", "))
                        });
                        return [2 /*return*/];
                    }
                    kmValue = parseInt(km, 10);
                    priceValue = parseInt(price, 10);
                    return [4 /*yield*/, (0, CreatVehicleService_1.CreatVehicleService)(model, mark_id, exchange_id, fuel_id, bodyWork_id, kmValue, year, priceValue, description_id, fileUrls[0], fileUrls[1], fileUrls[2], fileUrls[3], fileUrls[4] // Passa as URLs diretamente
                        )];
                case 2:
                    creatVehicleService = _b.sent();
                    res.status(200).json(creatVehicleService);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Erro no controller:", error_1);
                    res.status(500).json({ error: "Erro interno no servidor." });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=CreatVehicleController.js.map