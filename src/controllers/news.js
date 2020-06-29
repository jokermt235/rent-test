const sequel = require('../sources/sequelize');
const News = sequel.import('../models/news');
const Users = sequel.import('../models/users');
const Uploader = require('../sources/uploader');
Uploader.setLocation("news");
News.sync();
exports.index = (req, res)=>{
  News.findAll({
      order:[
        ["id","DESC"]
      ]
  }).then(news=> {  
    res.json(news);
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.create = (req, res)=>{
  News.create(req.body).then(news=>{
    res.json({success:true, data:news});
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.view = (req, res)=>{
  let newsId = req.params.id;
  News.findOne({
       where: { id: newsId }
  }).then(news=>{
    if(news){
      res.json({success:true, data:news});
    }else{
      res.status(404).send({success:false, message:"Not found"});
    }
  }).catch(error=>{
    res.status(400).send(error);
  });
};

exports.upload = (req, res)=>{
    Uploader.upload(req, res);
}

exports.update = (req, res)=>{
  News.findOne({
       where: { id: req.params.id }
  }).then(news=>{
    if(news){
      news.update(req.body).then(news=>{
        res.json({success:true, data:news});
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
  News.destroy({
     where:{id: req.params.id}
  }).then(deleted=>{
    if(deleted){
        if(req.params.image){
            try{
                let src = LOCATION + "/" + req.params.image;
                fs.unlinkSync(src);
            }catch(err){
                console.log(err);
            }
        }
    }
    res.json({success:true, data:true});
  }).catch(error=>{
      res.status(400).send(error);
  });
};
