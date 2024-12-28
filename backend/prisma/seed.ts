import { hash } from "bcryptjs";
import prismaClient from "../src/prisma";
// rodar com npx prisma db seed

async function main() {
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
        }
    ];

    for (const brand of brands) {
        await prismaClient.marks.upsert({
            where: { name: brand.name },
            create: brand,
            update: {}
        });
    }

    const typesSocial = [
        {
            name: "Instagram",
            banner: "https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-18.png"
        },
        {
            name: "Twitter",
            banner: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
        },
        {
            name: "Telegram",
            banner: "https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-0-2-1536x1536.png"
        },
        {
            name: "Gmail",
            banner: "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16-1536x1152.png"
        },
    ];

    for (const type of typesSocial) {
        await prismaClient.typesSocialNetworks.upsert({
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
    ]

    for (const fuel of Creatfuels)
        await prismaClient.fuels.upsert({
            where: { name: fuel.name },
            create: fuel,
            update: {}

        })

    const CreatExchanges = [
        { name: "Manual" },
        { name: "Automático" },
    ]

    for (const exchang of CreatExchanges)
        await prismaClient.exchanges.upsert({
            where:{name: exchang.name},
            create: exchang,
            update: {}
        })

    const CreatBodyWorks = [
        { name: "SUV"},
        { name: "Sedã"},
        { name: "4x4"},
        { name: "Scooter"},
    ]

    for (const bodyWorks of CreatBodyWorks)
        await prismaClient.bodyWorks.upsert({
            where: {name: bodyWorks.name},
            create: bodyWorks,
            update: {}
        })

    const passwordHash = await hash("1", 8);

    await prismaClient.user.upsert({
        where: {
            userName: "admin"
        },
        create: {
            userName: "admin",
            password: passwordHash
        },
        update: {}
    })

}

main()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async (err) => {
        console.error(err);
        await prismaClient.$disconnect();
        process.exit(1);
    });
