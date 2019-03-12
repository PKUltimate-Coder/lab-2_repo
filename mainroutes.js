'use strict'

let path = require('path');
let express = require('express');
let mainrouter = express.Router();
mainrouter.get('/', function (req, res) {
res.send('Hello World. I\'m Node.js');
});
mainrouter.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
module.exports = mainrouter;