const server = require('./app')
require('dotenv').config()
const serverport = process.env.PORT

server.listen(serverport, () =>{
    console.log(`Servidor está rodando na porta ${serverport}`)
})

