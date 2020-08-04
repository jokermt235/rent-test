const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = express.Router();
const config  = require('dotenv').config();

app.use(bodyParser.json({limit: '50mb'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept,x-access-token,Access-Control-Allow-Origin,lang");
    res.header("Access-Control-Allow-Methods","DELETE, POST, PUT, GET");
    next();
});
app.get('/', function (req, res) {
    res.send(config.parsed.APP_PORT);
});
var routes = require('./src/routes/route');
const sequelize = require('./src/sources/sequelize');
routes.forEach((route, index)=>{
    app.use(`/${route.path}`,require(`./src/routes/${route.name}`));
});
//
const port = config.parsed.APP_PORT || 3000;

app.listen(port, function () {
  console.log(`Shop API app listening on port ${port}!`);
});
