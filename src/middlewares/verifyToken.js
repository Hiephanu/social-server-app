const jwt =  require('jsonwebtoken')

const verifyToken =(req,res,next) =>{
    const authHeader= req.headers.authorization
    if(authHeader){
        const token =authHeader

        jwt.verify(token,'Hello',(err,user)=>{
            if(err){
                return  res.sendStatus(401).json({message: 'Verify'})
            }
            else {
                req.user=user
                next()
            }
        })
    }
    else{
        res.status(401).json({message : 'Fail to reslove token'})
    }
}

module.exports = verifyToken