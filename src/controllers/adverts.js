const sequel = require('../sources/sequelize');
const Adverts = sequel.import('../models/adverts');
const Users = sequel.import('../models/users');
Adverts.sync();
exports.index = (req, res)=>{
  Adverts.findAll({
      order:[
        ["id","DESC"]
      ]
  }).then(adverts=> {  
    res.json(adverts);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Adverts.create(req.body).then(advert=>{
    res.json(advert);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  let advertId = req.params.id;
  Adverts.findOne({
       where: { id: advertId }
  }).then(advert=>{
    if(advert){
      res.json(advert);
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.update = (req, res)=>{
  Adverts.findOne({
       where: { id: req.params.id }
  }).then(advert=>{
    if(advert){
      advert.update(req.body).then(advert=>{
        res.json(advert);
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
  Adverts.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
