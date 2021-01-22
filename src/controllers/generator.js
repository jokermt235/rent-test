const bcrypt = require('bcrypt');
exports.index = (req, res)=>{
    res.json({"status" :true});
};
exports.generate = (req, res)=>{
    if(req.body.password){
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            res.json({"staus" : true, "password" : hash});
        });
    }else{
        res.status(404).json({"status": false, "message" : "The password should not be empty!"});
    }
};