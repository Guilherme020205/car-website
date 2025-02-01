import prismaClient from "../../prisma";

export async function CreatContactService(name: string, number: string, linck: string) {
    const creatContact = prismaClient.contacts.create({
        data: {
            name: name,
            number: number,
            photo: linck
        }
    })

    console.log(`Contato criado: ${(await creatContact).name}, ${(await creatContact).number}`);
    return creatContact; 
}