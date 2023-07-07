const mongoose = require("mongoose");
const { Schema } = mongoose;
const {AmigosSchema} = require('./Amigos.js');
const {FerramentaSchema} = require('./Ferramentas.js');
const EmprestimoSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    dataDoEmprestimo: {
        type: Date,
        required: true
    },
    dataDeDevolucao: {
        type: Date,
        required: true
    },
    dataEntregue: {
        type: Date,
        required: false
    },
    amigos: {
        type: AmigosSchema,
        required: true
    },
    ferramentas: {
        type: [FerramentaSchema],
        required: true
    }
});
const EmprestimoModel = mongoose.model('Emprestimo', EmprestimoSchema);
module.exports = {EmprestimoModel};