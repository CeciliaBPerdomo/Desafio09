const faker = require('@faker-js/faker')
faker.locale = 'es'

exports.prodAleatorios = (cant) => {
    const prod = []
    for(let i = 0; i < cant; i++){
        prod.push(crearCombinaciones(getNextId))
    }
    return prod
}

let id = 1 
function getNextId(){
    return id++
}

function crearCombinaciones(id) {
    return {
        id,
        nombre: faker.ecommerce.product(),
        precio: faker.ecommerce.price(),
        foto: faker.image.technics()
    }
}