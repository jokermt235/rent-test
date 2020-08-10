const express = require('express');
const controller = require('../controllers/links');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/',controller.index);
route.get('/:id',controller.view);
route.post('/', auth.verifyToken,controller.create);
route.put('/:id',auth.verifyToken,controller.update);
route.post('/upload', auth.verifyToken,controller.upload);
route.delete('/:id', auth.verifyToken,controller.delete);
route.delete('/:id/:image', auth.verifyToken,controller.delete);
module.exports = route;
