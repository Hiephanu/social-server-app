const db = require('../../models/index')

const acceptFriend = async (req,res) =>{
    const {id} = req.body
    try {
        await db.friendship.update({
            status:'accept'
        },{
            where:{id:id}
        })
        return res.status(200).json({message :"Success"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message :"Internal error"})
    }
}

module.exports = acceptFriend