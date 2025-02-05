"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
exports.default = {
    upload: function (folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: (0, path_1.resolve)(__dirname, '..', '..', folder),
                filename: function (request, file, callback) {
                    var fileHash = crypto_1.default.randomBytes(16).toString("hex");
                    var fileName = "".concat(fileHash, "-").concat(file.originalname);
                    // Certifique-se de que o arquivo tenha uma extensão válida (por exemplo, .jpg, .png)
                    var allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
                    if (!allowedExtensions.includes((0, path_1.extname)(file.originalname))) {
                        return callback(null, fileName); // Nenhum erro, apenas o nome do arquivo
                    }
                    return callback(null, fileName);
                }
            })
        };
    }
};
//# sourceMappingURL=multer.js.map