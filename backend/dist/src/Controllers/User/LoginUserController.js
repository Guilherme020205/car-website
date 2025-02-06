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
exports.LoginUserController = LoginUserController;
const LoginUserService_1 = require("../../Services/User/LoginUserService");
function LoginUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userName, password } = req.body;
            if (!userName || !password) {
                res.status(400).json({ error: "Username and password are required." });
                return;
            }
            const user = yield (0, LoginUserService_1.LoginUserService)(userName, password);
            res.status(200).json(user);
        }
        catch (err) {
            console.error(err);
            res.status(401).json({ error: "Invalid username or password." });
        }
    });
}
