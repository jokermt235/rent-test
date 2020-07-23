const express = require('express');
const controller = require('../controllers/centerCharter');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/', controller.index);
route.post('/', auth.verifyToken, controller.create);
route.delete('/', auth.verifyToken, controller.delete);
module.exports = route;
