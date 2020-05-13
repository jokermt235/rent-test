const sequel = require('../sources/sequelize');
const Users = sequel.import('../models/users');
Users.sync();
exports.create = (req, res)=>{
  Users.findOne({
      where:{username: req.body.username}
  }).then(user=>{
    if(user){
      res.status(403).send(error);
    }else{
      Users.create(req.body).then(user=>{
        res.json({success:true, data:user});
      }).catch(error=>{
        res.status(400).send(error);
      });
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};
