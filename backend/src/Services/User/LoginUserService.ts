import prisma from "../../prisma";
import bcrypt from "bcryptjs";

export async function LoginUserService(userName: string, password: string) {
    // Busca o usuário pelo nome no banco de dados
    const user = await prisma.user.findUnique({
        where: { userName },
    });

    // Verifica se usuário existe
    if (!user) {
        throw new Error("Invalid username or password.");
    }

    // Compara senha enviada com a senha criptografada no banco
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid username or password.");
    }

    // Retorna os dados do usuário sem a senha
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
