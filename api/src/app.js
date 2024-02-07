const express = require('express')
const cors = require('cors')
const routers = require('./router')
const app = express()

app.use(cors({
    origin: '*'
}))


app.use(express.json())
app.use(routers)


module.exports = app