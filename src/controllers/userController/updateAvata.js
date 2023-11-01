const db = require('../../models/index')

const updateAvata =async (req,res)=>{
    const filePath =  req.filePath
    try {
        await db.user.update({
            avata:filePath
        })
        return res.status(200).json({message: 'Sucess'})
    } catch (error) {
        return res.status(500).json({message: 'Internal error'})
    }
}

module.exports = updateAvata