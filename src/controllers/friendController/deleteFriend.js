const db = require('../../models/index')
const {Op} = require('sequelize')
const deleteFriend = async (req,res) => {
    const id = req.params.id
    try {
        await db.friendship.destroy({
            where: {
                id:id
            }
        })
        res.status(200).json({message:"Success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal error'})
    }
}

module.exports = deleteFriend