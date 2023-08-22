const db = require('../../models/index')

const blockFriend =async (req,res) =>{
    const {id} = req.body 
    try {
        await db.friendship.update({
            status:'Block'
        },{
            where:{id:id}
        })
    } catch (error) {
        
    }
}

module.exports = blockFriend