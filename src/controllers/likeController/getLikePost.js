const db = require('../../models/index')

const getLikePost =async (req,res) =>{
    const idPost = req.params.id
    try {
        const likePost = await db.like.findAll({
            where:{
                idPost:idPost
            }
        })
        return res.status(200).json({message:'Success',data:likePost})
    } catch (error) {
        return res.status(500).json({message:"Internal error"})
    }
}

module.exports= getLikePost