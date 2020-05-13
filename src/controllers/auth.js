const bcrypt = require('bcrypt');
const sequel = require('../sources/sequelize');
const Users = sequel.import('../models/users');
const config = require('dotenv').config();
const jwt = require("jsonwebtoken");
exports.signin = (req, res)=>{
  Users.findOne({
       where: { username: req.body.username }
  }).then(user=>{
    if(user){
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if(!passwordIsValid){
        return res.status(401).send("Invalid password");
      }
      const token = jwt.sign({ id: user.id }, config.parsed.SECRET, {
        expiresIn: 7*86400 // 7 days
      });
      res.json({success:true, data:{"accessToken":token}});
    }else{
      return res.status(404).send({success:false, message:"Username not found"});
    }
  }).catch(error=>{
    return res.status(400).send(error);
  });
};

exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.parsed.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.body.userId = decoded.id;
    Users.findOne({
         where: { id: decoded.id }
    }).then(user=>{
      req.body.user = user;
      next();
    });
  });
};
