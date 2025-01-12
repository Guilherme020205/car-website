import prismaClient from "../../prisma";

export async function ListContactService() {
    return prismaClient.contacts.findMany()
}