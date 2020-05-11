const express = require('express');
const news = require('../controllers/news');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/',news.index);
route.get('/:id',news.view);
route.post('/', auth.verifyToken,news.create);
route.put('/:id',auth.verifyToken,news.update);
module.exports = route;
