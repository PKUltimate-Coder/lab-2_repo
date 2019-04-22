'use strict'

let path = require('path');
let express = require('express');

let app = express();
let bodyParser = require('body-parser');

let classRouter = require("./classRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//mounting our routers
app.use("/class", classRouter);

app.use('/cdn', express.static('public'));

let port = process.env.port || 3000;
app.listen(port);
console.log("Express server running on port", port);
