import { Request, Response } from "express";
import { LoginUserService } from "../../services/Login/LoginUserService";
 
class LoginUserController {
    async handle(req: Request, res: Response){
        const {user_id} = req.body;

        const loginUserService = new LoginUserService();

        const user = await loginUserService.execute(user_id);

        return res.json(user);

    }
}

export {LoginUserController}