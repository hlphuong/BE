const Route = require('express').Router();
const controller = require('../controllers/nhanvien');
const {tryCatch} = require('../middlewares/errorHandle');

Route.get('/',tryCatch(controller.get));
Route.get('/:id',tryCatch(controller.getById));
Route.post('/',tryCatch(controller.create));
Route.put('/:id',tryCatch(controller.edit));
Route.delete('/:id',tryCatch(controller.deleteById));

module.exports = Route;