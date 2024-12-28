import prismaClient from "../../prisma";

export async function AddOrUpDateLocationServer(locationName: string) {
    const existLocation = await prismaClient.location.findFirst()

    if(existLocation){
        return await prismaClient.location.update({
            where:{id: existLocation.id},
            data:{
                locationName: locationName
            }
        })
    }else{
        return await prismaClient.location.create({
            data: {
                locationName: locationName
            }
        })
    }

}