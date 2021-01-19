const sequel = require('../sources/sequelize');
const Model = sequel.import('../models/goods');
const Uploader = require('../sources/uploader');
Uploader.setLocation("goods");
Model.sync();
exports.index = (req, res)=>{
  Model.findAll().then(data=> {
    res.json(data);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Model.create(req.body).then(record=>{
    res.json({success:true, data:record});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.upload = (req, res)=>{
    Uploader.setLocation("reviews");
    Uploader.upload(req, res);
}

exports.view = (req, res)=>{
  let itemId = req.params.id;
  Model.findOne({
       where: { id: itemId }
  }).then(record=>{
    if(banner){
      res.json({success:true, data:record});
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
  }).then(record=>{
    if(record){
      record.update(req.body).then(saved=>{
        res.json({success:true, data:saved});
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
  Model.destroy({
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
