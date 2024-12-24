import prismaClient from "../../prisma";
 
class LoginUserService {
    async execute(user_id: string){
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                userName: true,
                password: true
            }
        })

        return user;
    }
}
export {LoginUserService}