const sequel = require('../sources/sequelize');
const Model = sequel.import('../models/carts');
Model.sync();
exports.index = (req, res)=>{
  Model.findAll().then(reviews=> {
    res.json(reviews);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Model.create(req.body).then(review=>{
    res.json(review);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  Model.findOne({
       where: { id: req.param.id }
  }).then(item=>{
    if(item){
      res.json(item);
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
      review.update(req.body).then(record=>{
        res.json(record);
      }).catch(error=>{
        res.status(400).send(error);
      });
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
      console.log(error);
  });
};

exports.delete = (req, res)=>{
  Model.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
       Uploader.setLocation("categories");
       Uploader.delete(req,res);
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
