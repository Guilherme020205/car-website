import { Request, Response } from "express";
import { ListBodyworksTypeService } from "../../Services/bodyworks/ListBodyworksTypeService";

export async function ListBodyworksTypeController(req: Request, res: Response) {
    try {
        const listBodyworksTypeService = await ListBodyworksTypeService()
        res.status(200).json(listBodyworksTypeService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}