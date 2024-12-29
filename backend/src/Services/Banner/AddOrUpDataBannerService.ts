import prismaClient from '../../prisma';

// Função para adicionar ou substituir o banner
export async function addOrUpdateBanner(linck: string) {
    const existingBanner = await prismaClient.banner.findFirst(); // Verifica se já existe um banner

    if (existingBanner) {
        // Atualiza o banner existente
        return await prismaClient.banner.update({
            where: { id: existingBanner.id },
            data: {
                linck: linck, // Atualiza o caminho da imagem
                updated_at: new Date(),
            },
        });
    } else {
        // Cria um novo banner
        return await prismaClient.banner.create({
            data: {
                linck: linck, // Salva o caminho da imagem
            },
        });
    }
}
