const Route = require('express').Router();
const controller = require('../controllers/auth');
const {tryCatch} = require('../middlewares/errorHandle');



Route.post("/login",tryCatch(controller.login));

module.exports =Route;
