const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 5000;
const {AmigosModel} = require('./models/Amigos.js');
const {FerramentasModel} = require('./models/Ferramentas.js');
const {EmprestimoModel} = require('./models/Emprestimo.js');
const {FabricanteModel} = require('./models/Fabricante.js');
app.use(session({ secret: "djasiofhndiodhnigoqh" }));
// evita conflito de requisições
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
    });
    app.get("/pegue/:tipo",async (req, res) => {
        const tipo = req.params.tipo;
        const typeEnums =  {
            "Amigos": 0,
            "Ferramentas": 1,
            "Emprestimos": 2,
            "Fabricante":3
        }
        const arrayFunctions = [
            async () => {return await AmigosModel.create(req.body);},
            async () => {return await FerramentasModel.create(req.body);},
            async () => {return await EmprestimoModel.create(req.body);},
            async () => {return await FabricanteModel.create(req.body);}
        ]
        try{
            const resp = await arrayFunctions[typeEnums[tipo]]();
            res.status(200).json(resp);
        }catch( err ) {
            console.log(err);
        }
        
    
    // const model = await AmigosModel.create(req.body);
    // res.status(201).send(model);

        });
    

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
  });