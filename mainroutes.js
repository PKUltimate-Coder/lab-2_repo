'use strict'

let path = require('path');
let express = require('express');
let mainrouter = express.Router();
mainrouter.get('/', function (req, res) {
res.send('Hello World. I\'m Phetole Makgobola. This is very exciting.');
});
mainrouter.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
module.exports = mainrouter;