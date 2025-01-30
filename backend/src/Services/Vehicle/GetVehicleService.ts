import prismaClient from "../../prisma";

export async function GetVehicleService(id: string) {
    return await prismaClient.vehicles.findMany({
        where: {
            id: id
        },
        include: {
            mark: true,
            fuel: true,
            exchange: true,
            bodyWork: true,
            description: true
        }
    })
}