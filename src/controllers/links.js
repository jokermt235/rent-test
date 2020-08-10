const sequel = require('../sources/sequelize');
const Model = sequel.import('../models/links');
const Uploader = require('../sources/uploader');
Model.sync();
exports.index = (req, res)=>{
  Model.findAll({
      order:[
        ["id","DESC"]
      ]
  }).then(items=> {  
    res.json(items);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Model.create(req.body).then(item=>{
    res.json({success:true, data:item});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  Model.findOne({
       where: { id: req.params.id }
  }).then(item=>{
    if(item){
      res.json({success:true, data:item});
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.update = (req, res)=>{
  Model.findOne({
       where: { id: req.params.id }
  }).then(item=>{
    if(item){
      item.update(req.body).then(item=>{
        res.json({success:true, data:item});
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

exports.upload = (req, res)=>{
    Uploader.setLocation("links");
    Uploader.upload(req, res);
}

exports.delete = (req, res)=>{
  Model.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
        Uploader.setLocation("links");
        Uploader.delete(req,res);
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
