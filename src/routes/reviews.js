const express = require('express');
const reviews = require('../controllers/reviews');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/',reviews.index);
route.get('/:id',reviews.view);
route.post('/', auth.verifyToken,reviews.create);
route.put('/:id',auth.verifyToken,reviews.update);
module.exports = route;
