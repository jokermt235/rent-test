const sequel = require('../sources/sequelize');
const Banners = sequel.import('../models/banners');
const multer = require('multer');
const fs = require('fs');
const LOCATION  = "/var/www/html/images/banners/";
const Storage = multer.diskStorage({
     destination: function(req, file, callback) {
       callback(null, LOCATION);
     },
     filename: function(req, file, callback) {
       let fileName = file.fieldname + "_" + Date.now() + "_" + file.originalname;
       callback(null, fileName);
       req.image = fileName;
     }
 });
 const upload = multer({
     storage: Storage
 }).array("images", 1);
Banners.sync();
exports.index = (req, res)=>{
  Banners.findAll().then(banners=> {
    res.json(banners);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Banners.create(req.body).then(banner=>{
    res.json({success:true, data:banner});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.upload = (req, res)=>{
  upload(req, res, function(err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      return res.end(req.image);
  });
}

exports.view = (req, res)=>{
  let bannerId = req.params.id;
  Banners.findOne({
       where: { id: bannerId }
  }).then(banner=>{
    if(banner){
      res.json({success:true, data:banner});
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.update = (req, res)=>{
  Banners.findOne({
       where: { id: req.params.id }
  }).then(banner=>{
    if(banner){
      banner.update(req.body).then(banner=>{
        res.json({success:true, data:banner});
      }).catch(error=>{
        res.status(400).send(error);
      });
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.delete = (req, res)=>{
  Banners.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
        if(req.params.image){
            try{
                let src = LOCATION + "/" + req.params.image;
                fs.unlinkSync(src);
            }catch(err){
                console.log(err);
            }
        }
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
