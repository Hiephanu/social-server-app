const db = require('../../models/index')

const createSavePost =async (req,res)=>{
    const {idUser,idPost} = req.body 
    try {
        await db.Save.create({
            idUser:idUser,
            idPost:idPost
        })
        return res.status(200).json({message:'Success'})
    } catch (error) {
        return res.status(500).json({message:'Internal error'})
    }
}

module.exports = createSavePost