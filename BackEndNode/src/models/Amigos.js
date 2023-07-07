const mongoose = require('mongoose');
const {Schema} = mongoose;

const AmigosSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    nome : {
        type: String,
        required: true
    },
    numero : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: false
    },
}, {timestamps: true});
const AmigosModel = mongoose.model('Amigos', AmigosSchema);
module.exports = {AmigosSchema,AmigosModel};
