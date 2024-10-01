const express = require('express')
const cors = require('cors')
const routers = require('./router')
const path = require('path')
const connectDB = require('./models/dbconnection'); 
const app = express()


app.use(cors({
    origin: '*'
}))

app.use(express.static(path.join(__dirname, 'views')))

connectDB();

app.use(express.json())
app.use(routers)


module.exports = app