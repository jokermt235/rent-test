const sequel = require('../sources/sequelize');
const model = sequel.import('../models/transports');
model.sync();
exports.index = (req, res)=>{
  model.findAll().then(transports=> {
    res.json(transports);
  }).catch(error=>{
    res.status(400).send(error);
  });
};
exports.create = (req, res)=>{
  model.create(req.body).then(transport=>{
    res.json({success:true, data: transport});
  }).catch(error=>{
    res.status(400).send(error);
  });
};
