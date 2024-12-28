import prismaClient from "../../prisma";

export async function CreatRedeService(linck: string, type_id: string) {
    const existRede = await prismaClient.socialNetworks.findFirst({
        where: {
            type_id: type_id
        }
    })

    if (existRede) {
        const creatRede = await prismaClient.socialNetworks.update({
            where:{
                type_id: existRede.type_id
            },
            data: {
                linck: linck,
                type_id: type_id,
            }
        })

        console.log(`Rede criada: ${(await creatRede).linck, (await creatRede).type_id} `)
        return creatRede;

    } else {
        const creatRede = await prismaClient.socialNetworks.create({
            data: {
                linck: linck,
                type_id: type_id,
            }
        })

        console.log(`Rede criada: ${(await creatRede).linck, (await creatRede).type_id} `)
        return creatRede;
    }
}