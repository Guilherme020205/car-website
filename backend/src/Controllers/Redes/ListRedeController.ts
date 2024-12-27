import { Request, Response } from "express";
import { ListContactService } from "../../Services/Contatos/ListContactService";

export async function ListRedeController(req: Request, res: Response){
    try {
        const listContactService = await ListContactService()
        res.status(200).json(listContactService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }
}