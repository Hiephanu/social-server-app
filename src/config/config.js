const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  development: {
    username:process.env.DB_USERNAME||"root",
    password:process.env.DB_PASSWORD|| null,
    database:process.env.DB_DATABASE|| "social-app",
    host: process.env.DB_HOST||"127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username:process.env.DB_USERNAME||"root",
    password:process.env.DB_PASSWORD|| null,
    database:process.env.DB_DATABASE|| "social-app",
    host: process.env.DB_HOST||"127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username:'if0_34935562',
    password:'onc9HoK7YW',
    database:'if0_34935562_socialApp',
    host: 'sql109.infinityfree.com',
    dialect: "mysql",
  },
};
