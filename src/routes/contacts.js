const express = require('express');
const contacts = require('../controllers/contacts');
const route = express.Router();
route.post('/', contacts.create);
module.exports = route;