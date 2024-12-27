import { Request, Response } from "express";
import { CreatContactService } from "../../Services/Contatos/CreatContactService";

export async function CreatContactController(req: Request, res: Response) {
    try {
        const { name, number } = req.body;

        if (!name || !number) {
            res.status(400).json({ error: "Name and number are required." })
        }

        const creatContact = await CreatContactService(name, number)
        res.status(200).json(creatContact)
    } catch (err) {
        res.status(401).json({ err: "Erro" })
    }

}