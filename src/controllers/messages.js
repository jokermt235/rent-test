const sequel = require('../sources/sequelize');
const Messages = sequel.import('../models/messages');
Messages.sync();
exports.index = (req, res)=>{
  Messages.findAll({
      order:[
        ["id","DESC"]
      ]
  }).then(messages=> {  
    res.json(messages);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Messages.create(req.body).then(message=>{
    res.json(message);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.delete = (req, res)=>{
    Messages.destroy({
        where: {id: req.params.id}
    }).then(deleted=>{
        if(deleted){ 
            res.json({success:true, data:true});
        }
    }).catch(error=>{
        res.status(400).send(error);
    });
}

