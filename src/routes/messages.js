const express = require('express');
const messages = require('../controllers/messages');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/', auth.verifyToken, messages.index);
route.post('/', messages.create);
route.delete('/:id', auth.verifyToken,messages.delete);
module.exports = route;
