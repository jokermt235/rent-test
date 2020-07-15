const Datastore = require('nedb');
const db = new Datastore({filename : "History"});
db.loadDatabase();
module.exports= db;
