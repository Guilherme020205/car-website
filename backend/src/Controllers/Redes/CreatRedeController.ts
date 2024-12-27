import { Request, Response } from "express";
import { CreatRedeService } from "../../Services/Redes/CreatRedeService";

export async function CreatRedeController(req: Request, res: Response) {
    try {
        const { linck, type_id } = req.body;

        if (!linck || !type_id) {
            res.status(400).json({ error: "Links and type is required!" })
            return
        }

        const creatRedeService = await CreatRedeService(linck, type_id)
        res.status(200).json(creatRedeService)
    } catch (error) {
        res.status(400).json({ error: "Erro" })
    }
}