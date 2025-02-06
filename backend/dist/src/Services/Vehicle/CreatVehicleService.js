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
exports.CreatVehicleService = CreatVehicleService;
const prisma_1 = __importDefault(require("../../prisma"));
function CreatVehicleService(model, mark_id, exchange_id, fuel_id, bodyWork_id, km, year, price, description_id, baner1, baner2, baner3, baner4, baner5) {
    return __awaiter(this, void 0, void 0, function* () {
        // Primeiro cria a descrição separadamente
        const description = yield prisma_1.default.descripitons.create({
            data: {
                description: description_id,
            },
        });
        // Depois associa a descrição ao veículo
        const createdVehicle = yield prisma_1.default.vehicles.create({
            data: {
                model,
                mark_id,
                exchange_id,
                fuel_id,
                bodyWork_id,
                km,
                year,
                price,
                description_id: description.id, // Usa o ID da descrição criada
                baner1,
                baner2,
                baner3,
                baner4,
                baner5,
            },
        });
        return createdVehicle;
    });
}
//# sourceMappingURL=CreatVehicleService.js.map