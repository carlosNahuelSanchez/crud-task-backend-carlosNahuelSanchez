const express = require('express');
const app = express()
const {ConnectionDataBase} = require("./database");
const { router } = require('../routers/main.routes');

app.use(express.json())
app.use(router)

app.get("/", (req,res) => {
    res.send("Registro de Tareas")
})

app.listen(3000, () => console.log("Server Running in port", 3000))