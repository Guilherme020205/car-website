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
exports.CreatContactController = CreatContactController;
var CreatContactService_1 = require("../../Services/Contatos/CreatContactService");
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
function CreatContactController(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var files, file_1, resultFile, _a, name, number, creatContact, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    files = req.files;
                    file_1 = files['file'];
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                                if (error) {
                                    reject(error); // Rejeita a promessa em caso de erro
                                    return;
                                }
                                resolve(result); // Resolve a promessa com o resultado do upload
                            }).end(file_1.data); // Envia os dados do arquivo para a stream
                        })];
                case 1:
                    resultFile = _b.sent();
                    // Verifica se o resultado do upload é válido e possui uma URL segura
                    if (!resultFile || !resultFile.secure_url) {
                        throw new Error("Erro ao fazer upload no Cloudinary.");
                    }
                    _a = req.body, name = _a.name, number = _a.number;
                    if (!name || !number) {
                        res.status(400).json({ error: "Name and number are required." });
                    }
                    return [4 /*yield*/, (0, CreatContactService_1.CreatContactService)(name, number, resultFile.secure_url)];
                case 2:
                    creatContact = _b.sent();
                    res.status(200).json(creatContact);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    res.status(401).json({ err: "Erro" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=CreatContactController.js.map