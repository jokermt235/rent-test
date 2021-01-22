const express = require('express');
const controller = require('../controllers/generator');
const route = express.Router();
route.post('/', controller.generate);
route.get('/', controller.index);
module.exports = route;