const { listarProductos, guardarProducto } = require('../db/producto')

/* Muestra los productos */
exports.listarProductos = async (req, res) => {
    let productos = await listarProductos()
    res.json(productos)
}

/* Guardar productos */
exports.agregarProducto = async (req, res) => {
    let producto = req.body
    await guardarProducto(producto)
    res.send('producto agregado')
}