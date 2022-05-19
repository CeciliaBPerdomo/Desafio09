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
const Mensajes = require('../db/DAO/daoMensajesDB')

const mensajes = new Mensajes()

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

    const file = []
    data.map(msj => file.push(msj._doc))

    const normalized = normalize(file, arcSchema)

    const norm = JSON.stringify(normalized).length
    const original = JSON.stringify(data).length
    const porctCompr = Number((100 - ((norm * 100) / original)).toFixed(2))

    return {normalized, porctCompr }
}