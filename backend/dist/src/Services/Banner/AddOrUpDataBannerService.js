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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrUpdateBanner = addOrUpdateBanner;
const prisma_1 = __importDefault(require("../../prisma"));
// Função para adicionar ou substituir o banner
function addOrUpdateBanner(linck) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingBanner = yield prisma_1.default.banner.findFirst(); // Verifica se já existe um banner
        if (existingBanner) {
            // Atualiza o banner existente
            return yield prisma_1.default.banner.update({
                where: { id: existingBanner.id },
                data: {
                    linck: linck, // Atualiza o caminho da imagem
                    updated_at: new Date(),
                },
            });
        }
        else {
            // Cria um novo banner
            return yield prisma_1.default.banner.create({
                data: {
                    linck: linck, // Salva o caminho da imagem
                },
            });
        }
    });
}
