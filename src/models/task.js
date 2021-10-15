const mongoose = require('mongoose');
const {Schema} = mongoose;

//Esquema: como van a lucir los datos
const datos = new Schema({

    nombre: String,
    correo: String,
    telefono: Number,
    tipo: String,
    adicional: String,
    placa: String,
    tamaño: String,
    
});

//Se crea un modelo para realizar operaciones get, post, put etc
//El modelo contienen 2 parametrs, el primer es el nombre del modelo 
//y el segundo es el nombre del esquema
module.exports = mongoose.model('datos', datos);
