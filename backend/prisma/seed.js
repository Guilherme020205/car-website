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
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../src/prisma"));
// rodar com npx prisma db seed
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const brands = [
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
        for (const brand of brands) {
            yield prisma_1.default.marks.upsert({
                where: { name: brand.name },
                create: brand,
                update: {}
            });
        }
        const typesSocial = [
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
        for (const type of typesSocial) {
            yield prisma_1.default.typesSocialNetworks.upsert({
                where: { name: type.name },
                create: type,
                update: {}
            });
        }
        // Fazer o seed dos fuels
        const Creatfuels = [
            { name: "Gasolina" },
            { name: "Flex" },
            { name: "Diesel" },
            { name: "Eletrico" }
        ];
        for (const fuel of Creatfuels)
            yield prisma_1.default.fuels.upsert({
                where: { name: fuel.name },
                create: fuel,
                update: {}
            });
        const CreatExchanges = [
            { name: "Manual" },
            { name: "Automático" },
        ];
        for (const exchang of CreatExchanges)
            yield prisma_1.default.exchanges.upsert({
                where: { name: exchang.name },
                create: exchang,
                update: {}
            });
        const CreatBodyWorks = [
            { name: "SUV" },
            { name: "Sedã" },
            { name: "4x4" },
            { name: "Scooter" },
        ];
        for (const bodyWorks of CreatBodyWorks)
            yield prisma_1.default.bodyWorks.upsert({
                where: { name: bodyWorks.name },
                create: bodyWorks,
                update: {}
            });
        const passwordHash = yield (0, bcryptjs_1.hash)("1", 8);
        yield prisma_1.default.user.upsert({
            where: {
                userName: "admin"
            },
            create: {
                userName: "admin",
                password: passwordHash
            },
            update: {}
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$disconnect();
}))
    .catch((err) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(err);
    yield prisma_1.default.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=seed.js.map