import mysql from 'mysql2'

const credentials = {
    host: 'localhost',
    user: 'root',
    password: 'dbpass1928',
    database: 'mydb'
}

export const db = mysql.createConnection(credentials)