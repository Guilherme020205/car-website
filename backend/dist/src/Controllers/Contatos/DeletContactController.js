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
exports.DeletContactController = DeletContactController;
const DeletContactService_1 = require("../../Services/Contatos/DeletContactService");
function DeletContactController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { idContact } = req.body;
            if (!idContact) {
                res.status(400).json({ error: "Contact is not exist" });
            }
            const deletContact = yield (0, DeletContactService_1.DeletContactService)(idContact);
            res.status(200).json(deletContact);
        }
        catch (error) {
            res.status(400).json({ error: "erro" });
        }
    });
}
//# sourceMappingURL=DeletContactController.js.map