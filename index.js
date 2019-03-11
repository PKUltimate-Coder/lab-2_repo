'use strict'
let path = require('path');
let express = require('express');
let app = express();
let mainrouter = require('./mainroutes');
    app.use(mainrouter);
    let port = process.env.PORT || 3000;
    app.listen(port);
    console.log('Express server running on port', port);
// console.log("Express server running on port 3000");