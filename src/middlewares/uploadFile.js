
const fs = require('fs')
const path =require('path')
const uploadFile = (req,res,next) =>{
    const uploadDirectory = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDirectory)) {
        fs.mkdirSync(uploadDirectory);
    }

    if(!req.files || !req.files.file){
        return res.status(400).json({message : 'File not found'})
    }
    else{
        const uploadedFile = req.files.file;
        const filePath = path.join(__dirname, 'uploads', uploadedFile.name);
        uploadedFile.mv(filePath,(err)=>{
            if(err){
                console.log(err);
                return res.status(500).json({message : 'Can not save File'})
            }
            req.filePath =filePath
            next()
        })
    }
}

module.exports = uploadFile