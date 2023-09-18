const db = require("../../models/index")
const createLike =async (req,res) =>{
    const {idUser,isPost} = req.body
    try {
        const createLike = await db.like.create({
            idUser:idUser,
            isPost:isPost
        })
        return res.status(200).json({message: 'Success'})
    } catch (error) {
        return res.status(500).json({message: 'Internal error'})
    }
}

module.exports = createLike