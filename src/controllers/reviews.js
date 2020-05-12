const sequel = require('../sources/sequelize');
const Reviews = sequel.import('../models/reviews');
Reviews.sync();
exports.index = (req, res)=>{
  Reviews.findAll().then(reviews=> {
    res.json({"success":true,"data":reviews});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Reviews.create(req.body).then(review=>{
    res.json({success:true, data:review});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  let reviewId = req.params.id;
  Reviews.findOne({
       where: { id: reviewId }
  }).then(review=>{
    if(review){
      res.json({success:true, data:review});
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.update = (req, res)=>{
  Reviews.findOne({
       where: { id: req.params.id }
  }).then(review=>{
    if(review){
      review.update(req.body).then(review=>{
        res.json({success:true, data:review});
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
