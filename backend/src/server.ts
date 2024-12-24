import express, { json } from 'express'
import { router } from './routes';

const app = express();

app.use(json())
app.use(router)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on port ${port}`))