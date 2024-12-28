import { Request, Response } from 'express';
import { addOrUpdateBanner } from '../../Services/Banner/AddOrUpDataBannerService';

// Endpoint para adicionar ou substituir o banner
export async function addOrUpdateBannerController(req: Request, res: Response) {
    try {
        const { linck } = req.body;

        if (!linck) {
            res.status(400).json({ error: 'O campo linck é obrigatório.' });
        }

        const banner = await addOrUpdateBanner(linck);

        res.status(200).json(banner);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar ou atualizar o banner.' });
    }
}
