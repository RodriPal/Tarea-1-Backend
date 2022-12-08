const express = require('express');
const routes = express.Router();

const { numController } = require('../controllers');

routes.get('/fibonacci', numController.getFibNumbers);



module.exports = routes;