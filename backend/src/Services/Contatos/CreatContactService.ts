import prismaClient from "../../prisma";

export async function CreatContactService(name: string, number: string) {
    const creatContact = prismaClient.contacts.create({
        data: {
            name: name,
            number: number
        }
    })

    console.log(`Contato criado: ${(await creatContact).name}, ${(await creatContact).number}`);
    return creatContact; 
}