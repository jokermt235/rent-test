const express = require('express');
const auth = require('../controllers/auth');
const route = express.Router();
route.post('/',auth.signin);
module.exports = route;
