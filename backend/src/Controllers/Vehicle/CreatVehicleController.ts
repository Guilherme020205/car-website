import { Request, Response } from "express";
import { CreatVehicleService } from "../../Services/Vehicle/CreatVehicleService";

// Função assíncrona para criar um veículo no sistema
export async function CreatVehicleController(req: Request, res: Response) {
    try {
        // Extrai os campos necessários do corpo da requisição (req.body)
        const {
            model, mark_id, exchange_id, fuel_id, bodyWork_id,
            km, year, price, description_id, baner1, baner2, baner3,
            baner4, baner5
        } = req.body;

        // Loga os dados recebidos no body para depuração
        console.log("Dados recebidos no body:", req.body);

        // Inicializa uma lista para armazenar os campos que estão ausentes
        const missingFields = [];

        // Verifica cada campo obrigatório e adiciona à lista se estiver ausente
        if (!model) missingFields.push("model");
        if (!mark_id) missingFields.push("mark_id");
        if (!exchange_id) missingFields.push("exchange_id");
        if (!fuel_id) missingFields.push("fuel_id");
        if (!bodyWork_id) missingFields.push("bodyWork_id");
        if (!km && km !== 0) missingFields.push("km"); // Permite valor zero para km
        if (!year) missingFields.push("year");
        if (!price && price !== 0) missingFields.push("price"); // Permite valor zero para price
        if (!description_id) missingFields.push("description_id");
        if (!baner1) missingFields.push("baner1");
        if (!baner2) missingFields.push("baner2");
        if (!baner3) missingFields.push("baner3");
        if (!baner4) missingFields.push("baner4");
        if (!baner5) missingFields.push("baner5");

        // Se houver campos ausentes, retorna um erro com status 400 e a lista de campos
        if (missingFields.length > 0) {
            console.log("Validação falhou, campos ausentes:", missingFields); // Loga os campos ausentes
            res.status(400).json({
                error: `Campos ausentes: ${missingFields.join(", ")}` // Converte a lista em uma string separada por vírgulas
            });
        }

        // Chama o serviço responsável pela lógica de criação do veículo, passando os dados
        const creatVehicleService = await CreatVehicleService(
            model, mark_id, exchange_id, fuel_id, bodyWork_id, km, year,
            price, description_id, baner1, baner2, baner3, baner4, baner5
        );

        // Retorna uma resposta de sucesso com status 200 e o resultado do serviço
        res.status(200).json(creatVehicleService);

    } catch (error) {
        // Caso ocorra algum erro, loga no console para depuração
        console.error("Erro no controller:", error);

        // Retorna uma resposta de erro com status 500 (erro interno do servidor)
        res.status(500).json({ error: "Erro interno no servidor." });
    }
}
