import prismaClient from "../../prisma";

export async function ViewLocationService() {
    return await prismaClient.location.findMany()
}