import { Request, Response } from "express";
import { DeletContactService } from "../../Services/Contatos/DeletContactService";

export async function DeletContactController(req: Request, res: Response) {
    try {
        const {idContact}= req.body;

        if(!idContact){
            res.status(400).json({error: "Contact is not exist"})
        }
        
        const deletContact = await DeletContactService(idContact)
        res.status(200).json(deletContact)

    } catch (error) {
        res.status(400).json({error: "erro"})
    }
} 