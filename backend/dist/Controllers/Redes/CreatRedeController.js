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
exports.CreatRedeController = CreatRedeController;
const CreatRedeService_1 = require("../../Services/Redes/CreatRedeService");
function CreatRedeController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { linck, type_id } = req.body;
            if (!linck || !type_id) {
                res.status(400).json({ error: "Links and type is required!" });
                return;
            }
            const creatRedeService = yield (0, CreatRedeService_1.CreatRedeService)(linck, type_id);
            res.status(200).json(creatRedeService);
        }
        catch (error) {
            res.status(400).json({ error: "Erro" });
        }
    });
}
//# sourceMappingURL=CreatRedeController.js.map