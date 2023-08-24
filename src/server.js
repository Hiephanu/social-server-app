const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const initWebRoute = require('./routes/web')
const cors= require('cors')
const fileupload =require('express-fileupload')
const Sequelize = require('sequelize')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(fileupload())

const port = process.env.PORT || 3000

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  
//setup route
initWebRoute(app)

app.listen(port,() =>{
    console.log(`Listen in port ${port}`);
})