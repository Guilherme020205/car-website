import { Request, Response } from "express";
import { ListExchangesTypeService } from "../../Services/exchanges/ListExchangesTypeService";
 

export async function ListExchangesTypeController(req: Request, res: Response) {
    try {
        const listExchangesTypeService = await ListExchangesTypeService()
        res.status(200).json(listExchangesTypeService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}