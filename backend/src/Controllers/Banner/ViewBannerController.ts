import { Request, Response } from "express";
import { ViewBannerService } from "../../Services/Banner/ViewBannerService";

export async function ViewBannerController(req: Request, res: Response) {
    try {
        const viewBannerService = await ViewBannerService()
        res.status(200).json(viewBannerService)
    } catch (error) {
        res.status(400).json({error: "Error"})
    }    
}