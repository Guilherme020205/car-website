import prismaClient from "../../prisma";

export async function ListExchangesTypeService() {
    return await prismaClient.exchanges.findMany()
}