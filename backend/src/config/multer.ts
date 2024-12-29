import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;

                    // Certifique-se de que o arquivo tenha uma extensão válida (por exemplo, .jpg, .png)
                    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
                    if (!allowedExtensions.includes(extname(file.originalname))) {
                        return callback(null, fileName); // Nenhum erro, apenas o nome do arquivo

                    }

                    return callback(null, fileName);
                }
            })
        };
    }
}
