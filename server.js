
const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});

    if(req.url ==='/produto'){
        res.end(JSON.stringify({
            message:"Rota de Produtos"
        }))
    }
    if(req.url ==='/usuario'){
        res.end(JSON.stringify({
            message:"Rota de Usuários"
        }))
    }
    else{
        res.end(JSON.stringify({
            message:'qualquer outra rota'
        }))
    }
    

});

server.listen(8000, ()=> console.log("Servidor criado com sucesso!"));