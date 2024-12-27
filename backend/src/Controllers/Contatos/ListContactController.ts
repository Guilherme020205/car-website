import { Request, Response } from "express";
import { ListContactService } from "../../Services/Contatos/ListContactService";

export async function ListContactController(req: Request, res: Response) {
    try {
        const listContact = await ListContactService()
        res.status(200).json(listContact)
    } catch (error) {
        res.status(401).json({error: "Erro"})
    }    
}
