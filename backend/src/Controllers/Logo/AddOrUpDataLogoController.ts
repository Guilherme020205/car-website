import { Request, Response } from "express";
import { AddOrUpDateLogoService } from "../../Services/Logo/AddOrUpDataLogoService";

export async function AddOrUpDateLogoController(req: Request, res: Response) {
    try {
        const { linck } = req.body;
         
        if(!linck){
            res.status(400).json({error: "Campo localização é obrigatorio!"})
        }
        const addOrUpDateLogoService = await AddOrUpDateLogoService(linck);
        res.status(200).json(addOrUpDateLogoService)

    } catch (error) {
        res.status(200).json({error: "Error"})
    }

}