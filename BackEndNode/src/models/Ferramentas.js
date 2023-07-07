const mongoose = require("mongoose");
const { Schema } = mongoose;
const FerramentaSchema = new Schema({
    id: {
        type : Number,
        required : true
    },
    nome: {
        type : String,
        required : true
    },
    preco : {
        type : Number,
        required : true
    
    }
});
const FerramentaModel = mongoose.model('Ferramenta', FerramentaSchema);
module.exports = {FerramentaSchema,FerramentaModel};