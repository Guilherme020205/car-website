import prismaClient from "../../prisma";

export async function ListRedeService() {
    return prismaClient.socialNetworks.findMany();
}