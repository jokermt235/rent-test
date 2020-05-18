const sequel = require('../sources/sequelize');
const Contacts = sequel.import('../models/contacts');
Contacts.sync();
exports.create = (req, res)=>{
  Contacts.create(req.body).then(contact=>{
    res.json({success:true, data:contact});
  }).catch(error=>{
    res.status(400).send(error);
  });
};