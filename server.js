/* 
npm init - y
npm install express socket.io
npm i ejs
npm i knex mysql
npm i knex sqlite3
npm i express
npm i faker
*/

const express = require('express')
//const dotenv = require('dotenv')

const app = express()
const bodyParser = require('body-parser')
//const faker = require('faker')
//faker.locale = 'es'
//dotenv.config()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const routerProducto = express.Router()
const routerTest = express.Router()
const { listarProductos, agregarProducto } = require('./controllers/producto')
const mensajes = require('./controllers/mensajes')
const { prodAletorios } = require('./controllers/testprod')
//const { knexMensajes } = require('./db/config')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/api/producto', routerProducto)
app.use('/api/productos-test', routerTest)

/* Mostrar productos */
routerProducto.get('/listar', listarProductos)

/* Guardar productos */
routerProducto.post('/guardar', agregarProducto)

io.on('connection', async(socket) => {
    console.log('Usuario conectado')
     /* Emitir todos los mensajes a un cliente nuevo */
    socket.emit('messages', await mensajes.mostrarTodos())
    /* Emitir a todos los clientes  */
    socket.on('new-message', async(data) => {
        data.fyh = new Date().toLocaleString
        mensajes.guardar(data)
        io.socket.emit('messages', await mensajes.mostrarTodos())
    })
})

/* Mostar productos aleatorios */
routerTest.get('/', prodAletorios)

/*Server*/
const PORT = process.env.PORT || 8080
const srv = server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${srv.address().port}`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))
