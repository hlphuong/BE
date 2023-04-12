const Route = require('express').Router();
const controller = require('../controllers/mathang');
const {tryCatch} = require('../middlewares/errorHandle');

Route.get('/',tryCatch(controller.get));
Route.get('/:id',tryCatch(controller.getById));
Route.get('/',tryCatch(controller.create));


module.exports = Route;