import { Request, Response } from 'express';
import { DeletRedeService } from '../../Services/Redes/DeletRedeService';

export async function DeletRedeController(req: Request, res: Response) {
    try {
        const { rede_id } = req.body;
        
        const deletRedeService = await DeletRedeService(rede_id)
        res.status(200).json(deletRedeService)

    } catch (error) {
    
        res.status(400).jsonp({ error: "Erro" })
    
    }
}