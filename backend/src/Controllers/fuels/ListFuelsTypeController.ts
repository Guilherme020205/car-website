import { Request, Response } from "express";
import { ListFuelsTypeService } from "../../Services/fuels/ListFuelsTypeService";


export async function ListFuelsTypeController(req: Request, res: Response) {
    try {
        const listFuelsTypeService = await ListFuelsTypeService()
        res.status(200).json(listFuelsTypeService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}