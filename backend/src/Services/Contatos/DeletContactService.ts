import prismaClient from "../../prisma";

export async function DeletContactService(idContact: string) {
    const deletedContact  = prismaClient.contacts.delete({
      where: {
        id: idContact
      }
    })
    return deletedContact 

}