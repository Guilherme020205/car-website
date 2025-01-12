import { Request, Response } from "express";
import { ListRedeService } from "../../Services/Redes/ListRedeService";

export async function ListRedeController(req: Request, res: Response){
    try {
        const listRedeService = await ListRedeService()
        res.status(200).json(listRedeService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }
}