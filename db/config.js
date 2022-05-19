const knexProducto = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'omi2002g', 
        database: 'ecommerce'
    }, 
    pool: {min: 0, max: 7}
})

const knexMensajes = require('knex')({
    client: 'sqlite3', 
    connection: {
        filename: './mydb.sqlite'
    },
    useNullAsDefault: true    
})



const daosMongoDB = {
    mongoDB: {
        mensajes: async() => import('./DAO/daoMensajesDB')
    }
}

module.exports = {
    knexProducto, knexMensajes, daosMongoDB
}

//export default daosMongoDB