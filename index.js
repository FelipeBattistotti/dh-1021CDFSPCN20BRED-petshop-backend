const express = require('express')
const app = express()
const consign = require('consign')
const cors = require('cors')

require('dotenv').config()

// const { gateKeeper } = require('./middlewares')

app.use(cors())
app.use(express.json())

// app.use(gateKeeper)

consign()
    .include('./api')
    .then('./routes')
    .into(app)

app.listen(process.env.PORT || 3000, ()=>{console.log('Rodando Servidor - Porta: ', process.env.PORT)})