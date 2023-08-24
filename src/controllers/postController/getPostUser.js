const db = require('../../models/index')

const getPostUser =async (req,res) => {
    const offset = parseInt(req.query.offset) || 0
    const limit = 5
    const id = req.query.id
    console.log(id,offset);
    try {
        const posts = db.post.findAll({
            where : {
                userId:id
            },
            offset,
            limit
        },
      )
      return res.status(200).json({posts:posts})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal error"})
    }
}

module.exports = getPostUser