const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const serverPort = process.env.PORT || 3010

mongoose.connect('mongodb://localhost:27017/curso_basico_mern', {
    /* useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false */
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("MongoDB conectado com sucesso!")
    }
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get('/home', function(req, res){
    res.json({
                message: 'Hello World',
                author: "Flou Ainan",
                ajudante: "Naya Lua"
            })
})

app.listen(serverPort, function(){
    console.log(`Server running on localhost:${serverPort}`)
})
