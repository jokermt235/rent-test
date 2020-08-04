const SimpleUploader = require('../sources/SimpleUploader');
const config  = require('dotenv').config();
exports.index = (req, res)=>{
    let lang = req.headers.lang; 
    let file = config.parsed.APP_BASE_TEXT_PATH + "history/" + lang + ".txt";
    res.sendFile(file);
}
exports.create = (req, res)=>{
    SimpleUploader.setLocation("history");
    let lang = req.headers.lang;
    SimpleUploader.write(req.body, ['RU','KG','EN'] , (error,data)=>{
        if(error){
            res.status(400).send(error);
        }else{
            res.json({success:true});
        }
    });
    
};

exports.delete = (req, res)=>{
}
