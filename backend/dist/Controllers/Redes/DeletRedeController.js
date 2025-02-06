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
exports.DeletRedeController = DeletRedeController;
const DeletRedeService_1 = require("../../Services/Redes/DeletRedeService");
function DeletRedeController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { rede_id } = req.body;
            const deletRedeService = yield (0, DeletRedeService_1.DeletRedeService)(rede_id);
            res.status(200).json(deletRedeService);
        }
        catch (error) {
            res.status(400).jsonp({ error: "Erro" });
        }
    });
}
//# sourceMappingURL=DeletRedeController.js.map