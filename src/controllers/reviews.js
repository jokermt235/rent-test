const sequel = require('../sources/sequelize');
const Reviews = sequel.import('../models/reviews');
const Uploader = require('../sources/uploader');
Uploader.setLocation("reviews");
Reviews.sync();
exports.index = (req, res)=>{
  Reviews.findAll().then(reviews=> {
    res.json(reviews);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  Reviews.create(req.body).then(review=>{
    res.json(review);
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
      res.json(review);
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
        res.json(revie);
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

exports.upload = (req, res)=>{
    Uploader.setLocation("reviews");
    Uploader.upload(req, res);
}

exports.delete = (req, res)=>{
  Reviews.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
       Uploader.setLocation("reviews");
       Uploader.delete(req,res);
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
