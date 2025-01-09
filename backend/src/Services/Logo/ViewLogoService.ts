import prismaClient from "../../prisma";

export async function ViewLogoService() {
    return await prismaClient.logo.findMany()
}