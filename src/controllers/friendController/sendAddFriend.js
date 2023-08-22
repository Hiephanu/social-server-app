const db = require('../../models/index')

const sendAddFriend = async (req,res)=>{
    const {idUserSend,idUserRecieve} = req.body
    const status = 'wait'
    try {
        await db.friendship.create({
            idUserSend:idUserSend,
            idUserRecieve:idUserRecieve,
            status:status
        })
        return res.status(200).json({message:'Send success'})
    } catch (error) {
        return res.status(500).json({message:'Internal error'})        
    }
}

module.exports = sendAddFriend