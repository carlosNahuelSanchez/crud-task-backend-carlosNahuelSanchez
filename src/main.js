import express, { json } from 'express';
const app = express()
import { router } from '../routers/main.routes.js';

app.use(json())
app.use(router)

app.get("/", (req,res) => {
    res.send("Registro de Tareas")
})

app.listen(3000, () => console.log("Server Running in port", 3000))