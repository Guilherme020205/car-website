import { Request, Response } from "express";
import { ViewLocationService } from "../../Services/Location/ViewLocationService";

export async function ViewLocationController(req: Request, res: Response) {
    try {
        const viewLocationService = await ViewLocationService()
        res.status(200).json(viewLocationService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}