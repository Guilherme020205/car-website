import { Request, Response } from "express";
import { ListTypeRedeService } from "../../Services/TypeRedes/ListTypeRedeService";

export async function ListTypeRedeController(req: Request, res: Response) {
    try {
        const listTypeRede = await ListTypeRedeService()
        res.status(200).json(listTypeRede)
    } catch (error) {
        res.status(401).json({error: "Erro"})
    }    
}
