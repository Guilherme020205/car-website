import { Request, Response } from "express";
import { GetVehicleService } from "../../Services/Vehicle/GetVehicleService";

export async function GetVehicleController(req: Request, res: Response) {
    try {
        const { id } = req.params

        const getVehicleService = await GetVehicleService(id)

        res.status(200).json(getVehicleService)
    } catch (error) {
        res.status(500).json(error)
    }
}