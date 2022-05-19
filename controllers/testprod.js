const { faker } = require('@faker-js/faker')
faker.locale = 'es'


const prodAleatorios = (req, res) => {
    const prod = []
    let cant = 5
    for(let i = 0; i < cant; i++){
        prod.push(crearCombinaciones(getNextId()))
    }
    res.json(prod)
}

let id = 1
function getNextId(){
    return id++
}

function crearCombinaciones(id) {
    return {
        id,
        nombre: faker.commerce.product(),
        precio: faker.commerce.price(),
        foto: faker.image.technics()
    }
}

module.exports = { prodAleatorios }