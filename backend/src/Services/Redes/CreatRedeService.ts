import prismaClient from "../../prisma";

export async function CreatRedeService(linck: string, type_id: string) {
    const creatRede = await prismaClient.socialNetworks.create({
        data: {
            linck: linck,
            type_id: type_id,
        }
    })

    console.log(`Rede criada: ${(await creatRede).linck,(await creatRede).type_id} `)
    return creatRede;
}