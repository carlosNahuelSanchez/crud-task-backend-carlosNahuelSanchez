import { createConnection } from 'mysql2/promise';

async function ConnectionDataBase(){
    const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tasks_db',
    })
    return connection
}

export {ConnectionDataBase}