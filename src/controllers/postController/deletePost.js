const db = require('../../models/index')

const deletePost = async (req,res) => {
    const {id} = req.body
    try {
        await db.post.destroy({
            where: {
                id : id
            }
        })
    } catch (error) {
        res.status(500).json({message : 'Internal error'})
    }
}

module.exports = deletePost