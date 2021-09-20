const { databaseConnection } = require('./connection')
const login = []
const star = []

async function salvarlogins(login) {
    const result = await databaseConnection('cadastro').insert(login)

    if(result){
        return{
            nome: login.nome,
            sobrenome: login.sobrenome,
            email: login.email,
            senha: login.senha
        }
    }else{
        console.error("error")
        return{
            error: "login ou senha incorreto"
        }
    }
}

/*async function salvarAvaliacao(star) {
    const result = await databaseConnection('avaliacao').insert(star)

    if(result){
        return{
            star
        }
    }else{
        console.error("error")
        return{
            error: "input incorreto"
        }
    }
}*/

 
module.exports = {salvarlogins}
 