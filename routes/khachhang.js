const Route = require('express').Router();
const controller = require('../controllers/khachhang');
const {tryCatch} = require('../middlewares/errorHandle');

Route.get('/',tryCatch(controller.get));
Route.get('/:id',tryCatch(controller.getById));
Route.post('/',tryCatch(controller.create));


module.exports = Route;