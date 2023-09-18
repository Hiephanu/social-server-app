const db = require('../../models/index')
const unLike =async (req,res) => {
    const {idUser,idPost} = req.body 
    try {
        await db.like.destroy({
            where : {
                idUser:idUser,
                idPost:idPost
            }
        })
        res.status(200).json({message:'Success'})
    } catch (error) {
        res.status(500).json({message:'Internal error'})
    }
}

module.exports = unLike