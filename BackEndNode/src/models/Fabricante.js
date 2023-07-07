const mongoose = require('mongoose');
const {Schema} = mongoose;
const {FerramentaSchema} = require('./Ferramentas.js');
const FabricanteSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    nome : {
        type: String,
        required: true
    },
    cnpj : {
        type: String,
        require: true,
    },
    ferramentas : {
        type: [FerramentaSchema],
        required: false
    }});
const FabricanteModel = mongoose.model('Fabricante', FabricanteSchema);
module.exports = {FabricanteModel};