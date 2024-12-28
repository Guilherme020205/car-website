import { Request, Response } from 'express';
import { AddOrUpDateLocationServer } from '../../Services/Location/AddOrUpDataLocationService';

export async function AddOrUpDateLocationController(req: Request, res: Response) {

    try {
        const { locationName } = req.body;

        if(!locationName){
            res.status(400).json({error: "Localização obrigatorio!"})
        } 

        const addOrUpDateLocationServer = await AddOrUpDateLocationServer(locationName)
        res.status(200).json(addOrUpDateLocationServer)

    } catch (error) {
        res.status(400).json({error: "Error"})
    }

}