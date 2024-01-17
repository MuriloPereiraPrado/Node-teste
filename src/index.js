const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (req,res)=>{
    res.sendFile(__dirname + "/pages/home.html");
});

router.get("/sobre", (req,res)=>{
    res.sendFile(__dirname + "/pages/sobre.html");
});

router.get("/blog", function(req,res){
    res.send("bem-vindo ao blog");
});

router.get("/ola/:nome/:cargo", function(req,res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>seu cargo é : " + req.params.cargo + "</h2>");
});

app.use(router);

app.listen(3333, ()=>{
    console.log("servidor rodando na url http://localhost:3333");
});