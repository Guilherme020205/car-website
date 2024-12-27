import prismaClient from "../../prisma";

export async function DeletRedeService(rede_id: string) {
    const deletRede = await prismaClient.socialNetworks.delete({
        where: {
            id: rede_id
        }
    })
    return deletRede
}