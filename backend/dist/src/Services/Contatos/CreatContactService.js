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
exports.CreatContactService = CreatContactService;
const prisma_1 = __importDefault(require("../../prisma"));
function CreatContactService(name, number, linck) {
    return __awaiter(this, void 0, void 0, function* () {
        const creatContact = prisma_1.default.contacts.create({
            data: {
                name: name,
                number: number,
                photo: linck
            }
        });
        console.log(`Contato criado: ${(yield creatContact).name}, ${(yield creatContact).number}`);
        return creatContact;
    });
}
//# sourceMappingURL=CreatContactService.js.map