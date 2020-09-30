const sequel = require('../sources/sequelize');
const Photos = sequel.import('../models/photos');
const Users = sequel.import('../models/users');
const Uploader = require('../sources/uploader');
Photos.sync();
exports.index = (req, res)=>{
  let page = 0;
  if(req.params.page){
      page = req.params.page;
  }
  let _offset = page * 10; 
  Photos.findAll({
      limit:10,
      offset : _offset,
      order:[
        ["id","DESC"]
      ]
  }).then(photos=> {  
    res.json(photos);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Photos.create(req.body).then(photo=>{
    res.json({success:true, data:photo});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  let photoId = req.params.id;
  Photos.findOne({
       where: { id: photoId }
  }).then(photo=>{
    if(photo){
      res.json({success:true, data:photo});
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.upload = (req, res)=>{
    Uploader.setLocation("photos");
    Uploader.upload(req, res);
}

exports.update = (req, res)=>{
  Photos.findOne({
       where: { id: req.params.id }
  }).then(photos=>{
    if(photos){
      photos.update(req.body).then(photo=>{
        res.json({success:true, data:photo});
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
  Photos.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
        Uploader.setLocation("photos");
        Uploader.delete(req,res); 
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
