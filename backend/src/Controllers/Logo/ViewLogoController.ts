import { Request, Response } from "express";
import { ViewLogoService } from "../../Services/Logo/ViewLogoService";

export async function ViewLogoController(req: Request, res: Response) {
    try {
        const viewLogoService = await ViewLogoService()
        res.status(200).json(viewLogoService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}