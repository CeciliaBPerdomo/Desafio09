const { knexProducto } = require('./config')

/* Mostrar productos */
exports.listarProductos = () =>
    knexProducto.from('productos').select('*')
    .then(rows => {
        return rows
    }).catch(error => {console.log(error); throw error})

/* Guardar productos */
exports.guardarProducto = producto => 
    knexProducto('productos').insert(producto)
    .then(prod => prod)
    .catch(error => {console.log(error); throw error})
