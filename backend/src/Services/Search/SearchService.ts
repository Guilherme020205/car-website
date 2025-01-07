import prismaClient from "../../prisma";

export async function SearchService(
    title: string,
    greater_value: string,
    lowest_value: string,
    type_fuel: string[],
    type_exchange: string[],
    type_bodyWorks: string[]
) {
    const filters: any = {};

    if (title) {
        filters.OR = [
            { model: { contains: title, mode: 'insensitive' } },
            { mark: { name: { contains: title, mode: 'insensitive' } } }
        ];
    }

    if (greater_value && lowest_value) {
        filters.price = {
            gte: parseInt(lowest_value),
            lte: parseInt(greater_value)
        };
    } else if (greater_value) {
        filters.price = { lte: parseInt(greater_value) };
    } else if (lowest_value) {
        filters.price = { gte: parseInt(lowest_value) };
    }

    if (type_fuel.length > 0) {
        filters.fuel = {
            id: { in: type_fuel }
        };
    }

    if (type_exchange.length > 0) {
        filters.exchange = {
            id: { in: type_exchange }
        };
    }

    if (type_bodyWorks.length > 0) {
        filters.bodyWork = {
            id: { in: type_bodyWorks }
        };
    }

    return prismaClient.vehicles.findMany({
        where: filters,
        include: {
            mark: true,
            fuel: true,
            exchange: true,
            bodyWork: true,
            description: true
        }
    });
}
