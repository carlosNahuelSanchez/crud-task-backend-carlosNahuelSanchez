const {ConnectionDataBase} = require("../src/database")

const verTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(result[0])
    connection.end()
}

const verTareasId = async (req,res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("SELECT * FROM tasks WHERE ID = ?", id)
    res.json(result[0])
    connection.end()
}

const agregarTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const {title, description, isComplete} = req.body
    if (!title || title.lenght > 255) {
        res.send("ERROR 400 Bad Request | El título no es válido")
    }
    else if(!description){
        res.send("ERROR 400 Bad Request | No existe una descripción ")
    }
    else if (typeof isComplete !== "boolean") {
        res.send("ERROR 400 Bad Request | No se especifica correctamente el estado de la tarea")
    }
    else{
    const result = await connection.query("INSERT INTO tasks (title, description, isComplete) VALUES (?,?,?)", [title, description, isComplete])
    connection.end()
    res.send("201 Created | Tarea Agregada")
}
}

const actualizarTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const {title, description, isComplete} = req.body
    const id = req.params.id
    const result = await connection.query("UPDATE `tasks` SET `title`= ? ,`description`= ? ,`isComplete`= ? WHERE id LIKE ? ", [title, description, isComplete,id])
    connection.end()
    res.send("Tarea Actualizada")
}

const eliminarTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("DELETE FROM `tasks` WHERE id = ?", id)
    connection.end()
    res.send("Tarea Eliminada")
}

module.exports = {verTareas,verTareasId, agregarTareas, actualizarTareas, eliminarTareas}