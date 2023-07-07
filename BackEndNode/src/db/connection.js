const mongoose = require("mongoose");
const connectToDatabase = async () => {
    await mongoose.connect(
      `mongodb+srv://lucas:ROGER@cluster0.cf8tdps.mongodb.net/`
      ).then(()=>{
          console.log("conecxão um sucesso na db");
      }).catch((error)=>{
          return console.log("aconteceu um erro no data base");
      })  
      }
  module.exports = connectToDatabase;