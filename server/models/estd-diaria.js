/** Clase Estadisticas Diarias */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadisticaDiariaSchema = new Schema({
    dia: {type: Number, required: true},
    apostado: { type: Number, required: true},
    ganado: { type: Number, required: false},
    profit: { type: Number, required: false},
    mes: { type: Number, required: true }
});

module.exports = mongoose.model('EstadisticaDiaria', EstadisticaDiariaSchema);