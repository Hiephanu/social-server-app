const db = require("../../models/index")
const createLike =async (req,res) =>{
    const {idUser,idPost} = req.body

    try {
        await db.like.create({
            idUser:idUser,
            idPost:idPost
        })
        return res.status(200).json({message: 'Success'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal error'})
    }
}

module.exports = createLike