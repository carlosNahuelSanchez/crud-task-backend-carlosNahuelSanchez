const mysql = require('mysql2/promise');

async function ConnectionDataBase(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tasks_db',
    })
    return connection
}

module.exports = {ConnectionDataBase}