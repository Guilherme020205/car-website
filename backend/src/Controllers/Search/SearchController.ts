import { Response, Request } from "express";
import { SearchService } from "../../Services/Search/SearchService";

export async function SearchController(req: Request, res: Response) {
    try {
        /*
            - Por nome ou do veiculo ou da marca
            - Valor entre x e y
            - Quais tipos de Combustível
            - Quais tipos de Câmbio
            - Quais tipos de Carroceria
        */
        const {
            title,
            greater_value,
            lowest_value,
            type_fuel = [],
            type_exchange = [],
            type_bodyWorks = []
        } = req.body

        const searchService = await SearchService(title,
            greater_value,
            lowest_value,
            type_fuel,
            type_exchange,
            type_bodyWorks)

        res.status(200).json(searchService)

    } catch (error) {
        res.status(400).json({ error: "Error" })
    }



}
