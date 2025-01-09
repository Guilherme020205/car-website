import prismaClient from "../../prisma";

export async function ViewBannerService() {
    return await prismaClient.banner.findMany()
}