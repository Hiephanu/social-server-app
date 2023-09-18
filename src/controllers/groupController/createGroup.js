const db = require('../../models/index')

const createGroup =async (req,res) =>{
    const {name,userIds} = req.body
    try {
        await db.Group.create({
            name:name,
            userIds:userIds
        })
        res.status(200).json({message:'Success'})
    } catch (error) {
        res.status(500).json({message:'Internal error'})
    }
}

module.exports = createGroup