const jwt= require('jsonwebtoken')
const createJwt =()=>{
    const token = jwt.sign({name : 'hiep'}, 'Hiep', {expiresIn : '1h'})
    console.log(token);
    return token
}
const verifyToken = (token) =>{
    
}
module.exports =  createJwt