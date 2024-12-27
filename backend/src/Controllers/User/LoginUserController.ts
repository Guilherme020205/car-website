import { Request, Response } from "express";
import { LoginUserService } from "../../Services/User/LoginUserService";

export async function LoginUserController(req: Request, res: Response): Promise<void> {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            res.status(400).json({ error: "Username and password are required." });
            return;
        }

        const user = await LoginUserService(userName, password);
        res.status(200).json(user);
        
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "Invalid username or password." });
    }
}
