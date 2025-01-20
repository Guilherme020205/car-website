import prismaClient from "../../prisma";

export async function ListBodyworksTypeService() {
    return await prismaClient.bodyWorks.findMany()
}