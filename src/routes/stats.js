const express = require('express');
const stats = require('../controllers/stats');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/',stats.index);
route.post('/', auth.verifyToken,stats.create);
route.put('/',auth.verifyToken,stats.update);
route.delete('/:id', auth.verifyToken,stats.delete);
module.exports = route;
