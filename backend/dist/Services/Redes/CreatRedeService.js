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
exports.CreatRedeService = CreatRedeService;
const prisma_1 = __importDefault(require("../../prisma"));
function CreatRedeService(linck, type_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existRede = yield prisma_1.default.socialNetworks.findFirst({
            where: {
                type_id: type_id
            }
        });
        if (existRede) {
            const creatRede = yield prisma_1.default.socialNetworks.update({
                where: {
                    type_id: existRede.type_id
                },
                data: {
                    linck: linck,
                    type_id: type_id,
                }
            });
            console.log(`Rede criada: ${(yield creatRede).linck, (yield creatRede).type_id} `);
            return creatRede;
        }
        else {
            const creatRede = yield prisma_1.default.socialNetworks.create({
                data: {
                    linck: linck,
                    type_id: type_id,
                }
            });
            console.log(`Rede criada: ${(yield creatRede).linck, (yield creatRede).type_id} `);
            return creatRede;
        }
    });
}
//# sourceMappingURL=CreatRedeService.js.map