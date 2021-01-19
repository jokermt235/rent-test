const express = require('express');
const controller = require('../controllers/users');
const auth = require('../controllers/auth');
const route = express.Router();;
route.post('/', controller.create);
module.exports = route;
