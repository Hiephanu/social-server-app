const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const initWebRoute = require('./routes/web')
const cors= require('cors')
const fileupload =require('express-fileupload')
const config =require('./config/config') 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(fileupload())

const port = process.env.PORT || 3001

  
//setup route
initWebRoute(app)

app.listen(port,() =>{
    console.log(`Listen in port ${port}`);
})