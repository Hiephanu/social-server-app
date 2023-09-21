const db = require('../../models/index')
const getTrending = async (req,res) => {
    try {
        const trending =[]
        const post = await db.like.findAll()
        post.forEach(element => {
            
        });
    } catch (error) {
        
    }
}

module.exports = getTrending