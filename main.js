const express = require('express');
const app = express()
const {ConnectionDataBase} = require("./database")

app.use(express.json())


app.get("/", (req,res) => {
    res.send("Registro de Tareas")
})

app.get("/tareas", async (req,res) => {
    const connection = await ConnectionDataBase()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(result[0])
    connection.end()
})

app.get("/tareas/:id", async (req,res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("SELECT * FROM tasks WHERE ID = ?", id)
    res.json(result[0])
    connection.end()
})

app.post("/tareas", async (req,res) => {
    const connection = await ConnectionDataBase()
    const {title, description, isComplete} = req.body
    const result = await connection.query("INSERT INTO tasks (title, description, isComplete) VALUES (?,?,?)", [title, description, isComplete])
    connection.end()
    res.send("Tarea Agregada")
})

app.put("/tareas/:id", async(req,res)=> {
    const connection = await ConnectionDataBase()
    const {title, description, isComplete} = req.body
    const id = req.params.id
    const result = await connection.query("UPDATE `tasks` SET `title`= ? ,`description`= ? ,`isComplete`= ? WHERE id LIKE ? ", [title, description, isComplete,id])
    connection.end()
    res.send("Tarea Actualizada")
})


app.listen(3000, () => console.log("Server Running in port", 3000))