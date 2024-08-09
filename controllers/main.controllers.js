import { ConnectionDataBase } from "../src/database.js"


//Ver todas las tareas registrados
const verTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(result[0])
    connection.end()
}

//Ver las tareas por ID
const verTareasId = async (req,res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("SELECT * FROM tasks WHERE ID = ?", id)
    res.json(result[0])
    connection.end()
}

//Agregar tareas
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

//Actualizar Tareas
const actualizarTareas = async (req,res) => {
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
    const id = req.params.id
    const result = await connection.query("UPDATE `tasks` SET `title`= ? ,`description`= ? ,`isComplete`= ? WHERE id LIKE ? ", [title, description, isComplete,id])
    connection.end()
    res.send("200 OK | Tarea Actualizada")
    }
}

//Eliminar Tareas
const eliminarTareas = async (req,res) => {
    const connection = await ConnectionDataBase()
    const id = req.params.id
    const result = await connection.query("DELETE FROM `tasks` WHERE id = ?", id)
    connection.end()
    res.send("200 OK | Tarea Eliminada")
}

export {verTareas,verTareasId, agregarTareas, actualizarTareas, eliminarTareas}