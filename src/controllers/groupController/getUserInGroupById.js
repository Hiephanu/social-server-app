const db = require('../../models/index')

const getUserInGroupById =async (req,res) => {
    const id = req.params.id
    try {
        const groups = await db.group.findAll({
            where:{
                id:id
            }
        })
        const users = groups.userIds
        res.status(200).json({message:'Success',users})
    } catch (error) {
        
    }
}

module.exports =getUserInGroupById