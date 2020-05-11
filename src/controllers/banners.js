const sequel = require('../sources/sequelize');
const Banners = sequel.import('../models/banners');
Banners.sync();
exports.index = (req, res)=>{
  Banners.findAll().then(banners=> {
    res.json({"success":true,"data":banners});
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
