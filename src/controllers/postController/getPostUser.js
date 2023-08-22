const db = require('../../models/index')

const getPostUser =async (req,res) => {
    const offset = parseInt(req.query.offset) || 0
    const limit = 5
    const {id} = req.query.id
    try {
        const posts = db.posts.findAll({
            where : {
                userId:id
            },
            offset,
            limit
        },
      )
      return res.status(200).render('posts',{posts})
    } catch (error) {
        return res.status(500).json({message:"Internal error"})
    }
}

module.exports = getPostUser