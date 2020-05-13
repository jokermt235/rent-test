const express = require('express');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const route = express.Router();;
route.post('/', users.create);
module.exports = route;
