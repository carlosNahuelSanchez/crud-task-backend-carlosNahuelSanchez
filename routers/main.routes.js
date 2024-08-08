const express = require("express")
const router = express.Router()
const {verTareas,verTareasId, agregarTareas, actualizarTareas, eliminarTareas} = require("../controllers/main.controllers")

router.get("/tareas", verTareas)

router.get("/tareas/:id", verTareasId)

router.post("/tareas", agregarTareas)

router.put("/tareas/:id", actualizarTareas)

router.delete("/tareas/:id", eliminarTareas)

module.exports = {router}