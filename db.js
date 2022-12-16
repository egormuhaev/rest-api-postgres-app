const Pool = require('pg').Pool
const pool = new Pool(
    {
        user: "postgres",
        password: "mevs2001",
        host: "localhost",
        port: 5432,
        database: "test_api"
    }
)

module.exports = pool

