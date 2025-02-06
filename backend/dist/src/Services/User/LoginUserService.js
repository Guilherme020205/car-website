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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserService = LoginUserService;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function LoginUserService(userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        // Busca o usuário pelo nome no banco de dados
        const user = yield prisma_1.default.user.findUnique({
            where: { userName },
        });
        // Verifica se usuário existe
        if (!user) {
            throw new Error("Invalid username or password.");
        }
        // Compara senha enviada com a senha criptografada no banco
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid username or password.");
        }
        // Retorna os dados do usuário sem a senha
        const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
        return userWithoutPassword;
    });
}
