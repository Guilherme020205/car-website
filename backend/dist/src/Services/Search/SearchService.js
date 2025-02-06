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
exports.SearchService = SearchService;
const prisma_1 = __importDefault(require("../../prisma"));
function SearchService(title, greater_value, lowest_value, type_fuel, type_exchange, type_bodyWorks) {
    return __awaiter(this, void 0, void 0, function* () {
        const filters = {};
        if (title) {
            filters.OR = [
                { model: { contains: title, mode: 'insensitive' } },
                { mark: { name: { contains: title, mode: 'insensitive' } } }
            ];
        }
        if (greater_value && lowest_value) {
            filters.price = {
                gte: parseInt(lowest_value),
                lte: parseInt(greater_value)
            };
        }
        else if (greater_value) {
            filters.price = { lte: parseInt(greater_value) };
        }
        else if (lowest_value) {
            filters.price = { gte: parseInt(lowest_value) };
        }
        if (type_fuel.length > 0) {
            filters.fuel = {
                id: { in: type_fuel }
            };
        }
        if (type_exchange.length > 0) {
            filters.exchange = {
                id: { in: type_exchange }
            };
        }
        if (type_bodyWorks.length > 0) {
            filters.bodyWork = {
                id: { in: type_bodyWorks }
            };
        }
        return prisma_1.default.vehicles.findMany({
            where: filters,
            include: {
                mark: true,
                fuel: true,
                exchange: true,
                bodyWork: true,
                description: true
            }
        });
    });
}
