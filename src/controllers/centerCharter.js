const SimpleUploader = require('../sources/SimpleUploader');
const config  = require('dotenv').config();
exports.index = (req, res)=>{
    let lang = req.headers.lang;
    if(!req.headers.lang){
        lang = "RU";
    }
    let file = config.parsed.APP_BASE_TEXT_PATH + "centerCharter/" + lang + ".txt";
    res.sendFile(file);
}
exports.create = (req, res)=>{
    SimpleUploader.setLocation("centerCharter");
    SimpleUploader.upload(req, res, (error)=>{
        if(error){
            res.status(400).send(error);
        }else{
            res.json({success:true});
        }
    });
    
};

exports.delete = (req, res)=>{
}
