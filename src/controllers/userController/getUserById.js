const db= require("../../models/index")

const getUserById = async (req,res) =>{
    const id = req.params.id
    try {
        const users = await db.user.findAll({
            where: {
                id : id
            }
        })
        return res.status(200).json({message:'Success',data: users})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Fail'})
    }
}

module.exports = getUserById