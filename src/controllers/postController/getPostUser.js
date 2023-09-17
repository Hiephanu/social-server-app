const db = require('../../models/index')

const getPostUser =async (req,res) => {
    const limit = 5
    const id = req.query.id
    try {
        const posts =await db.post.findAll({
            where : {
                userId:id
            },
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