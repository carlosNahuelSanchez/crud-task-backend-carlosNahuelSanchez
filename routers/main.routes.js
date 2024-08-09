import { Router } from "express"

const router = Router()

import { verTareas, verTareasId, agregarTareas, actualizarTareas, eliminarTareas } from "../controllers/main.controllers.js"

router.get("/tareas", verTareas)

router.get("/tareas/:id", verTareasId)

router.post("/tareas", agregarTareas)

router.put("/tareas/:id", actualizarTareas)

router.delete("/tareas/:id", eliminarTareas)

export {router}