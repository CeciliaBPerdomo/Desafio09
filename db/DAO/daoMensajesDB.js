const mongoose = require('mongoose')

const mensj = new mongoose.Schema({
    autor: {
        id: {type: String, required: true, max: 4, index: true}, 
        nombre: {type: String, required: true, max: 100}, 
        apellido: {type: String, required: true, max: 100}, 
        edad: {type: Number},
        alias: {type: String, required: true, max: 30},
        avatar: {type: String, required: true, max: 500}
    },
    text: {type: String, required: true}, 
    time: {type: String, required: true}
})

const msj = mongoose.model('mensajes', mensj)

export default class Mensajes {
    constructor(conexion, tabla) {}

    guardar = async (mensaje) => {
        const guardarMensj = new msj(mensaje)
        await guardarMensj.save()
    }

    listar = async () => {
        try{
            return await msj.find({})
        } catch(error){
            console.log('Error al listar: no se encuentran datos men!')
        }
    }
}