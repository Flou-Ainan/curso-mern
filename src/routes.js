
const express = require("express")
const routes = express.Router()
const Usuario = require('./controllers/usuarios.controller')

routes.get('/home/', (req,res) => {
    res.json({
        message:"Hello World !",
        author:"Flou Ainan"
    })
})
routes.get('/',Usuario.index)
routes.post('/api/usuarios', Usuario.create)

module.exports = routes