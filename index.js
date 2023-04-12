
const express = require('express');
const config = require('./config')
const db = require('./utils/db')
const cors = require('cors');
const app = express();
const multipart = require('connect-multiparty');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const route = require('./routes');
// config cors 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    exposedHeaders: 'Content-Range',
}
app.use(cors(corsOptions));

const PORT = 3000;

const checkHealth = (req, res) => {
    res.send("hello")
}

route(app)
app.use('/', checkHealth)



app.listen(config.api.port, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ config.api.port)
	else
		console.log("Error occurred, server can't start", error);
	}
);
