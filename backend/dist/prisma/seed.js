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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
var prisma_1 = __importDefault(require("../src/prisma"));
// rodar com npx prisma db seed
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var brands, _i, brands_1, brand, typesSocial, _a, typesSocial_1, type, Creatfuels, _b, Creatfuels_1, fuel, CreatExchanges, _c, CreatExchanges_1, exchang, CreatBodyWorks, _d, CreatBodyWorks_1, bodyWorks, passwordHash;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    brands = [
                        {
                            name: "Volkswagen",
                            banner: "https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png"
                        },
                        {
                            name: "Fiat",
                            banner: "https://logodownload.org/wp-content/uploads/2014/05/fiat-logo-21.png"
                        },
                        {
                            name: "Chevrolet",
                            banner: "https://logodownload.org/wp-content/uploads/2014/02/Chevrolet-logo-3.png"
                        },
                        {
                            name: "Hyundai",
                            banner: "https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-4.png"
                        },
                        {
                            name: "Toyota",
                            banner: "https://logodownload.org/wp-content/uploads/2014/04/toyota-logo-4.png"
                        },
                        {
                            name: "Jeep",
                            banner: "https://logodownload.org/wp-content/uploads/2019/02/jeep-logo.png"
                        },
                        {
                            name: "Renault",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/renault-logo-7-1565x2048.png"
                        },
                        {
                            name: "Honda",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/honda-autos-logo.png"
                        },
                        {
                            name: "Nissan",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/nissan-logo-1-1-1536x1285.png"
                        },
                        {
                            name: "BMW",
                            banner: "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-3-1536x1524.png"
                        },
                        {
                            name: "Audi",
                            banner: "https://logodownload.org/wp-content/uploads/2016/11/audi-logo-10.png"
                        },
                        {
                            name: "Peugeot",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-0-1-1536x1536.png"
                        },
                        {
                            name: "Citroën",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/citroen-logo-0-1-1536x1536.png"
                        },
                        {
                            name: "Mitsubishi",
                            banner: "https://logodownload.org/wp-content/uploads/2014/10/mitsubish-logo.png"
                        },
                        {
                            name: "Kia",
                            banner: "https://logodownload.org/wp-content/uploads/2017/10/kia-logo-0.png"
                        },
                        {
                            name: "Suzuki",
                            banner: "https://logodownload.org/wp-content/uploads/2017/04/suzuki-logo-1-1.png"
                        },
                        {
                            name: "Land Rover",
                            banner: "https://logodownload.org/wp-content/uploads/2019/08/land-rover-logo-0.png"
                        },
                        {
                            name: "Volvo",
                            banner: "https://logodownload.org/wp-content/uploads/2017/10/volvo-logo-0-1536x1536.png"
                        },
                        {
                            name: "Mercedes-Benz",
                            banner: "https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-0-1536x1536.png"
                        },
                        {
                            name: "Jaguar",
                            banner: "https://logodownload.org/wp-content/uploads/2020/09/jacksonville-jaguars-logo-0-1536x1536.png"
                        },
                        {
                            name: "Chery",
                            banner: "https://logodownload.org/wp-content/uploads/2018/03/cherry-logo.png"
                        },
                        {
                            name: "BYD",
                            banner: "https://logodownload.org/wp-content/uploads/2023/07/byd-logo-0-1536x1536.png"
                        },
                        {
                            name: "Lexus",
                            banner: "https://logodownload.org/wp-content/uploads/2021/05/lexus-logo-0-1536x1536.png"
                        },
                        {
                            name: "Ferrari",
                            banner: "https://logodownload.org/wp-content/uploads/2017/05/ferrari-logo-0.png"
                        },
                        {
                            name: "Ford",
                            banner: "https://logodownload.org/ford-logo/ford-logo-4/"
                        },
                        {
                            name: "Dodge",
                            banner: "https://logodownload.org/wp-content/uploads/2019/03/dogge-logo-0.png"
                        }
                    ];
                    _i = 0, brands_1 = brands;
                    _e.label = 1;
                case 1:
                    if (!(_i < brands_1.length)) return [3 /*break*/, 4];
                    brand = brands_1[_i];
                    return [4 /*yield*/, prisma_1.default.marks.upsert({
                            where: { name: brand.name },
                            create: brand,
                            update: {}
                        })];
                case 2:
                    _e.sent();
                    _e.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    typesSocial = [
                        {
                            name: "Instagram",
                            banner: "https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
                        },
                        {
                            name: "Twitter",
                            banner: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
                        },
                        {
                            name: "Telegram",
                            banner: "https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-9.png"
                        }
                    ];
                    _a = 0, typesSocial_1 = typesSocial;
                    _e.label = 5;
                case 5:
                    if (!(_a < typesSocial_1.length)) return [3 /*break*/, 8];
                    type = typesSocial_1[_a];
                    return [4 /*yield*/, prisma_1.default.typesSocialNetworks.upsert({
                            where: { name: type.name },
                            create: type,
                            update: {}
                        })];
                case 6:
                    _e.sent();
                    _e.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8:
                    Creatfuels = [
                        { name: "Gasolina" },
                        { name: "Flex" },
                        { name: "Diesel" },
                        { name: "Eletrico" }
                    ];
                    _b = 0, Creatfuels_1 = Creatfuels;
                    _e.label = 9;
                case 9:
                    if (!(_b < Creatfuels_1.length)) return [3 /*break*/, 12];
                    fuel = Creatfuels_1[_b];
                    return [4 /*yield*/, prisma_1.default.fuels.upsert({
                            where: { name: fuel.name },
                            create: fuel,
                            update: {}
                        })];
                case 10:
                    _e.sent();
                    _e.label = 11;
                case 11:
                    _b++;
                    return [3 /*break*/, 9];
                case 12:
                    CreatExchanges = [
                        { name: "Manual" },
                        { name: "Automático" },
                    ];
                    _c = 0, CreatExchanges_1 = CreatExchanges;
                    _e.label = 13;
                case 13:
                    if (!(_c < CreatExchanges_1.length)) return [3 /*break*/, 16];
                    exchang = CreatExchanges_1[_c];
                    return [4 /*yield*/, prisma_1.default.exchanges.upsert({
                            where: { name: exchang.name },
                            create: exchang,
                            update: {}
                        })];
                case 14:
                    _e.sent();
                    _e.label = 15;
                case 15:
                    _c++;
                    return [3 /*break*/, 13];
                case 16:
                    CreatBodyWorks = [
                        { name: "SUV" },
                        { name: "Sedã" },
                        { name: "4x4" },
                        { name: "Scooter" },
                    ];
                    _d = 0, CreatBodyWorks_1 = CreatBodyWorks;
                    _e.label = 17;
                case 17:
                    if (!(_d < CreatBodyWorks_1.length)) return [3 /*break*/, 20];
                    bodyWorks = CreatBodyWorks_1[_d];
                    return [4 /*yield*/, prisma_1.default.bodyWorks.upsert({
                            where: { name: bodyWorks.name },
                            create: bodyWorks,
                            update: {}
                        })];
                case 18:
                    _e.sent();
                    _e.label = 19;
                case 19:
                    _d++;
                    return [3 /*break*/, 17];
                case 20: return [4 /*yield*/, (0, bcryptjs_1.hash)("1", 8)];
                case 21:
                    passwordHash = _e.sent();
                    return [4 /*yield*/, prisma_1.default.user.upsert({
                            where: {
                                userName: "admin"
                            },
                            create: {
                                userName: "admin",
                                password: passwordHash
                            },
                            update: {}
                        })];
                case 22:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.default.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (err) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(err);
                return [4 /*yield*/, prisma_1.default.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map