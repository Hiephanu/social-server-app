const db = require('../../models/index')

const getComment =async (req,res)=>{
    const postId = req.params.postId
    try {
        const comments  = await db.comment.findAll({
            where:{
                postId:postId
            }
        })
        return res.status(200).json({comments: comments,message:'Success'})
    } catch (error) {
        return res.status(400).json({message:'Fail'})
    }
}

module.exports =getComment