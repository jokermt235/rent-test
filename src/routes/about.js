const express = require('express');
const about = require('../controllers/about');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/', about.index);
route.post('/', auth.verifyToken, about.create);
route.delete('/', auth.verifyToken, about.delete);
module.exports = route;
