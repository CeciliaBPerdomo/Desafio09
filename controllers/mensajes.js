/*const { mostrarTodos, guardar } = require('../db/mensajes')

exports.guardar = (message) => {
    guardar(message)
    return message
}

exports.mostrarTodos = async () => {
    let mensajes = await mostrarTodos()
    return mensajes
}
*/
const io = require('../server.js')
const { normalize, schema } = require('normalizr')
const mensajes = require('../db/DAO/daoMensajesDB.js')

const mensajes = new mensajes()

export const newMens = msj => {
    mensajes.save(msj)
    io.sockets.emit('nuevo mensaje', msj)
}

export const mostrarTodos = async () => await mensajes.mostrarTodos()

/* Normalizar */
export const normalizedMongo = (data) => {
    const autoresSchema = new schema.Entity('autores')
    const msjsSchema = new schema.Entity('mensajes', {autor: autoresSchema}, {id: '_id'})
    const arcSchema = [msjsSchema]
}