import prismaClient from "../../prisma";

export async function CreatVehicleService(
    model: string,
    mark_id: string,
    exchange_id: string,
    fuel_id: string,
    bodyWork_id: string,
    km: number,
    year: string,
    price: number,
    description_id: string,
    baner1: string,
    baner2: string,
    baner3: string,
    baner4: string,
    baner5: string 
) {
    // Primeiro cria a descrição separadamente
    const description = await prismaClient.descripitons.create({
        data: {
            description: description_id,
        },
    });

    // Depois associa a descrição ao veículo
    const createdVehicle = await prismaClient.vehicles.create({
        data: {
            model,
            mark_id,
            exchange_id,
            fuel_id,
            bodyWork_id,
            km,
            year,
            price,
            description_id: description.id, // Usa o ID da descrição criada
            baner1,
            baner2,
            baner3,
            baner4,
            baner5,
        },
    });

    return createdVehicle;
}
