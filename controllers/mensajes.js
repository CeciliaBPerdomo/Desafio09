const { mostrarTodos, guardar } = require('../db/mensajes')

exports.guardar = (message) => {
    /*await*/ guardar(message)
    return message
}

exports.mostrarTodos = async () => {
    let mensajes = await mostrarTodos()
    return mensajes
}
