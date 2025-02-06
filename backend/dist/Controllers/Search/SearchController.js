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
exports.SearchController = SearchController;
const SearchService_1 = require("../../Services/Search/SearchService");
function SearchController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /*
                - Por nome ou do veiculo ou da marca
                - Valor entre x e y
                - Quais tipos de Combustível
                - Quais tipos de Câmbio
                - Quais tipos de Carroceria
            */
            const { title, greater_value, lowest_value, type_fuel = [], type_exchange = [], type_bodyWorks = [] } = req.body;
            const searchService = yield (0, SearchService_1.SearchService)(title, greater_value, lowest_value, type_fuel, type_exchange, type_bodyWorks);
            res.status(200).json(searchService);
        }
        catch (error) {
            res.status(400).json({ error: "Error" });
        }
    });
}
//# sourceMappingURL=SearchController.js.map