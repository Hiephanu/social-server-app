const path = require('path')
const getPostImage = (req,res) => {
    const name = req.params.name
    const rootDirectory = process.cwd();
    res.sendFile(path.join(rootDirectory,'src','public','postImage',name ))
}

module.exports = getPostImage