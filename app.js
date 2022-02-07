const express = require("express");
const app = express();
const port = 3000
const {randomUUID} = require("crypto")


app.use(express.json());

const products = [];

app.get('/',(req,res)=>{
    res.json({
        message: 'primeira rota',
        data: 'messagem aleatoria'
    })
})

app.post("/products",(req, res)=>{
    const {name, price} = req.body;

    const product = {
        name,
        price,
        id: randomUUID()
    }

    products.push(product)

    return res.json(product)
});

app.get("/products", (req,res)=>{
    return res.json(products)
})

app.get("/products/:id",(req,res)=>{
    const {id} = req.params;
    const product = products.find( product => product.id === id);
    return res.json(product);
})

app.listen(port, ()=> {
    console.log('servidor esta rodando na porta',port)
});