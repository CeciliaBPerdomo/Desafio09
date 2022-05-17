const { knexMensajes } = require('./config')

/* Mostrar productos */
exports.mostrarTodos = () =>
    knexMensajes.from('mensajes').select('*')
    .then(rows => {
        return rows
    }).catch(error => {console.log(error); throw error})

/* Guardar productos */
exports.guardar = mensaje => 
    knexMensajes('mensajes').insert(mensaje)
    .then(mensj => mensj)
    .catch(error => {console.log(error); throw error})
