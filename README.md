# CRUD-TASK-BACKEND-carlosNahuelSanchez

## Esta aplicacion sirve para realizar peticiones CRUD a una base de datos de tareas. En esta app puedes ver, agregar, actualizar y eliminar tareas

## Como usar la aplicación:

### -Clonar el repositorio en tu escritorio
<code>git clone https://github.com/carlosNahuelSanchez/crud-task-backend-carlosNahuelSanchez.git</code>

### Moverte al directorio de la app

<code> cd crud-task-backend-carlosNahuelSanchez</code>

### -Instalar las dependencias
<code>npm install</code>

### Solicita al servidor a través de ThunderLighting o Postman

#### - Ej: GET: localhost:3000/tareas 
Esta accion mostraria todas las tareas existentes

#### - Ej: GET: localhost:3000/tareas/1
Esta accion mostraria la tarea con el id número 1

#### - Ej: POST: localhost:3000/tareas
Esta accion publicaria una tarea en la base de datos.
Debe ir acompañada de un Body en formato JSON :

    {
    "title": "Matematicas"
    "description": "Trabajo Practico Matematica",
    "isComplete": false
    }

#### - Ej: PUT: localhost:3000/tareas/1
Esta accion actualiza una tarea en base a su id. Debe ir acompañada de un Body en formato JSON :
    
    {
    "title": "Lengua"
    "description": "Trabajo Practico Lengua",
    "isComplete": true
    }

#### - Ej: DELETE: localhost:3000/tareas/1
Esta accion eliminara una tarea dependiendo de su id



