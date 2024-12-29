import { Request, Response } from 'express';
import { addOrUpdateBanner } from '../../Services/Banner/AddOrUpDataBannerService';

export async function addOrUpdateBannerController(req: Request, res: Response) {
    try {
        if (!req.file) {
            res.status(400).json({ error: 'A imagem do banner é obrigatória.' });
            return; // Não precisa retornar, mas podemos usar `return` para garantir que o código pare aqui.
        }

        const linck = req.file.path; // Caminho do arquivo enviado

        const banner = await addOrUpdateBanner(linck);

        res.status(200).json(banner); // Aqui apenas chama a resposta, sem retornar nada.
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar ou atualizar o banner.' });
    }
}
