import prismaClient from "../../prisma";

export async function ListTypeRedeService() {
    return prismaClient.typesSocialNetworks.findMany();
}