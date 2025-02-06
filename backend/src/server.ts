import  express, { json } from "express";
import router from './routes';
import fileUpload from "express-fileupload";
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

app.use(fileUpload({
    limits:{ fileSize: 50 * 1024 * 1024} // espera o envio de no maximo 50mb
}))

app.use(router)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on port ${port}`))