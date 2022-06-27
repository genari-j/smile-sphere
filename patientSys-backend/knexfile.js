module.exports = {
    client: "mysql2",
    connection: {
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}