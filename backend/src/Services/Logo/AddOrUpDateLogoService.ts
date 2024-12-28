import prismaClient from "../../prisma";

export async function AddOrUpDateLogoService(linck: string) {
    const existLogo = await prismaClient.logo.findFirst()

    if (existLogo) {
        // Atualiza o existente
        return await prismaClient.logo.update({
            where: { id: existLogo.id },
            data: {
                linck: linck,
                updated_at: new Date(),
            }
        })
    }else{
        return await prismaClient.logo.create({
            data: {
                linck: linck
            }
        })
    }
}