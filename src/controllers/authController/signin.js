const db = require('../../models/index')
const jwt= require('jsonwebtoken')

const signin =async (req, res) => {
  const {email,password} = req.body
  const secretKey = 'Hello'
  try {
    const checkEmail = await db.user.findAll({raw:true,limit:1,where:{email:email}})
    const user = checkEmail[0]
    if(checkEmail.length==1)
    {
      const checkPassword = await db.user.findAll({raw:true,limit:1,where:{password:password}})
      if(checkPassword.length==1){
        const token = jwt.sign({name:user.name,email:user.email},secretKey,{ expiresIn: '1h' })
        console.log(new Date());
        res.json({message:'Login success',token:token,role:user.role,id:user.id})
      }
      else {
        return res.status(401).json({message:'Wrong password'})
      }
    }
    else {
      res.status(401).json('Can not find email')
    }
  } catch (error) {
    
  }
};

module.exports = signin;
