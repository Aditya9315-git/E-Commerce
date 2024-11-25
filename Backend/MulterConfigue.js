const multer= require('multer')
const path= require('path')

let Storage= multer.diskStorage({
    destination:'./ProductImg',
    filename:function(req,file,cb){
        cb(null,file.fieldname +"_"+Date.now()+path.extname(file.originalname))
    }
})
module.exports=multer({storage:Storage})