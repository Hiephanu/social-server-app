const db = require('../../models/index')

const createdComment =async (req,res) =>{
    const {userId,postId,content} = req.body
    try {
        await db.comment.create({
            userId:userId,
            postId:postId,
            content:content
        })
        return res.status(200).json({message: 'Success'})
    } catch (error) {
        return res.status(400).json({message: 'Fail'})
    }
}

module.exports = createdComment