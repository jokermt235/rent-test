const multer = require('multer');
const fs = require('fs');
const config  = require('dotenv').config();
const Storage = multer.diskStorage({
     destination: (req, file, callback)=>{
       callback(null, this.LOCATION);
     },
     filename: function(req, file, callback) {
       let fileName = file.originalname;
       callback(null, fileName);
       req.file = fileName;
     }
});
const _upload = multer({
        storage: Storage
}).array("files", 3);

exports.upload = (req, res)=>{
    _upload(req, res, function(err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      return res.end(req.file);
  });
};
exports.delete = (req, res)=>{
    if(req.params.file){
         try{
            let src = this.LOCATION + "/" + req.params.file;
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
    this.LOCATION = config.parsed.APP_BASE_TEXT_PATH  + path  + "/";
}
