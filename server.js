const express = require('express')
const app = express()
const {salvarlogins} = require('./database/database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

    


app.post('/login', async (req, res) =>{

    console.log(req.body)
    
    const cadastro = await salvarlogins({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome, 
        email: req.body.email,
        senha: req.body.senha
    })

    
    res.send(cadastro)
})


app.listen(3003)