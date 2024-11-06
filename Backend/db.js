const mysql = require('mysql2');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'blog_db'
})

module.exports = mySqlPool;