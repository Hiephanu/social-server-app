const db=  require('../../models/index')

const createdPost =async (req,res) =>{
    const {userId,content} = req.body
    const filePath = req.filePath
    try {
        await db.post.create({
            userId:userId,
            content:content,
            file:filePath
        })
        return  res.status(200).json({message: 'Success'})
    } catch (error) {
        return res.status(500).json({message: 'Internal error'})
    } 
}

module.exports = createdPost