const Route = require('express').Router();
const controller = require('../controllers/nganhhang');
const {tryCatch} = require('../middlewares/errorHandle');

Route.get('/',tryCatch(controller.get));


module.exports = Route;