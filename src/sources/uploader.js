const multer = require('multer');
const fs = require('fs');
const Storage = multer.diskStorage({
     destination: (req, file, callback)=>{
       callback(null, this.LOCATION);
     },
     filename: function(req, file, callback) {
       let fileName = file.fieldname + "_" + Date.now() + "_" + file.originalname;
       callback(null, fileName);
       req.image = fileName;
     }
 });
const _upload = multer({
        storage: Storage
}).array("images", 1);

exports.upload = (req, res)=>{
    _upload(req, res, function(err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      return res.end(req.image);
  });
};
exports.delete = (req, res)=>{
    if(req.params.image){
         try{
            let src = this.LOCATION + "/" + req.params.image;
            fs.unlinkSync(src);
        }catch(err){
             console.log(err);
        }
    }
}

exports.testLocation = ()=>{
    console.log(this.LOCATION);
}

exports.setLocation = (path)=>{
    this.LOCATION = "/var/www/html/images/"  + path  + "/";
}

