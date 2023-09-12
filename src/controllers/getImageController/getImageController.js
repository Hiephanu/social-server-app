const path = require('path')
const getImageController = (req,res) => {
    const id = req.params.id
    const rootDirectory = process.cwd();
    res.sendFile(path.join(rootDirectory,'src','public','avata',id ))
}

module.exports = getImageController