const sequel = require('../sources/sequelize');
const Stats = sequel.import('../models/stats');
Stats.sync();
exports.index = (req, res)=>{
  Stats.findAll({
      order:[
        ["id","DESC"]
      ]
  }).then(stats=> {  
    res.json(stats);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Stats.create(req.body).then(stats=>{
    res.json(stats);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.update = (req, res)=>{
  Stats.findOne({
       where: { id: req.body.id }
  }).then(stats=>{
    if(stats){
      stats.update(req.body).then(stats=>{
        res.json(stats);
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
  Stats.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
