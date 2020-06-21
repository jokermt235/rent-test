const express = require('express');
const auth = require('../controllers/auth');
const route = express.Router();
route.post('/', auth.signin);
route.post('/check', auth.verifyToken,auth.tokenOK);
module.exports = route;
