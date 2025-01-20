import prismaClient from "../../prisma";

export async function ListFuelsTypeService() {
    return await prismaClient.fuels.findMany()
}