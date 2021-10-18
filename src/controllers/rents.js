const sequel = require('../sources/sequelize');
const model = sequel.import('../models/rents');
model.sync();
exports.index = (req, res)=>{
  model.findAll().then(rents=> {
    res.json(rents);
  }).catch(error=>{
    res.status(400).send(error);
  });
};
exports.create = (req, res)=>{
  model.create(req.body).then(rent=>{
    res.json({success:true, data: rent});
  }).catch(error=>{
    res.status(400).send(error);
  });
};
