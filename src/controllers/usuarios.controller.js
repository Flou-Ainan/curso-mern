
const Usuario = require('../models/usuario.model')


module.exports = {
    index(req, res){
        res.json({message: 'Seja bem vindo(a)'})
    },
    async create(req, res){
        console.log("Request Recebido")
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body

        let data = {};
        let user;
        user = await Usuario.findOne({email_usuario})
        if(!user){
            data = {
                nome_usuario,
                email_usuario,
                tipo_usuario,
                senha_usuario
            }
            user = await Usuario.create(data)
            console.log(nome_usuario + " foi cadastrado no banco de dados" )
            return res.status(200).json(user)
        }else{
            console.log("The email is in use ("+email_usuario+")")
            return res.status(500).json({Mesage:`email ja cadastrado +(${email_usuario})`, ...user})
        }
    }
}