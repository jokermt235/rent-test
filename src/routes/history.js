const express = require('express');
const history = require('../controllers/history');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/', history.index);
route.post('/', auth.verifyToken, history.create);
route.delete('/', auth.verifyToken, history.delete);
module.exports = route;
