const db = require('../../models/index')
const jwt= require('jsonwebtoken')
const signup_post= async (req, res) => {
    const {name,email,password,birthday,address,role,avata} = req.body
    try {
      const checkEmail =await db.user.findAll({limit:1,raw:true,where:{email:email}})
      if(checkEmail.length>=1){
        return res.json({message: "Email was existed"})
      }
      else {
        await db.user.create({
          name:name,
          email:email,
          password:password,
          birthday:birthday,
          address:address,
          role:role,
          avata:avata
        })
        return res.status(200).json({message: " Register sucess"})
      }
    } catch (error) {
      return res.status(500).json({message: " Can't create user"})
    }
  }
  
module.exports=signup_post