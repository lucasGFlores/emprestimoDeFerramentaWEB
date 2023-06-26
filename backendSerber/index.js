const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 3000;
app.use(session({ secret: "djasiofhndiodhnigoqh" }));
// evita conflito de requisições
app.use(cors());
app.use(express.json());

app.get("/pegue/:model", (req, res) => {
    res.send("Hello World!");
    });

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
  });