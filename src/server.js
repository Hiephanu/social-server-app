const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const initWebRoute = require('./routes/web')
const cors= require('cors')
const fileupload =require('express-fileupload')
const config =require('./config/config') 

//socket.io
const {Server} = require('socket.io')
const { createServer } = require('http')
const server = createServer(app)
const io = new Server(server)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(fileupload())
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3001

  
//setup route
initWebRoute(app)

//create connection

io.on('connection',(socket)=>{
    console.log('a use connected');
})
//listen port
server.listen(port,() =>{
    console.log(`Listen in port ${port}`);
})