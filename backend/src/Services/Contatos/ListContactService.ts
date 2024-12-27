import prismaClient from "../../prisma";

export async function ListContactService() {
    return prismaClient.socialNetworks.findMany()
}