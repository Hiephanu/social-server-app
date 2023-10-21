const path =require('path')
const uploadFileAvata = (req,res,next) =>{
    if(!req.files || !req.files.file){
        return res.status(400).json({message : 'File not found'})
    }
    else{
        const uploadedFile = req.files.file;
        const rootDirectory = process.cwd()
        const filePath = path.join(rootDirectory,'src','public','avata',uploadedFile.name);
        uploadedFile.mv(filePath,(err)=>{
            if(err){
                console.log(err);
                return res.status(500).json({message : 'Can not save File'})
            }
            req.filePath =uploadedFile.name
            next()
        })
    }
}

module.exports = uploadFileAvata