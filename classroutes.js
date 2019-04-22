'use strict'

let path = require('path');
let express = require('express');

let router = express.Router();
let classList = require("./classList"); //our class list array

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'));
    });

router.get('/create', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'));
    });

router.get('/delete', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'));
    });

router.get('/edit', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'));
});

router.get('/api/list', function (req, res) {
    res.json(classList.ret()); //Respond with JSON
    });

router.get('/api/get/:id', function (req, res) {
    res.json(classList.get(req.params.id));
    });

router.post('/api/create', function(req, res){
    if (req.body.student === "")
    {
        console.log("Cannot create person with no name");
    }else 
    {
        classList.add(req.body.student);
        res.json(req.body.student);
        console.log("creating the following Student:", req.body.student);
    }
    //res.redirect(req.baseUrl + '/api/list');
});

router.post('/api/delete', function(req, res){
    let num = classList.findIndex(element => element === req.body.student);
    if (num === -1) {
        console.log("Name not found");
    }else
    {
        console.log("deleting a student entry");
        classList.delete(num);
    }
    

    });
router.post('/api/edit', function(req, res){
    
    let num = classList.findIndex(element=> element === req.body.student);
    
    if (num === -1) {
        console.log("Name not found");
        } 
        else if (req.body.newVal === "")
            {
                console.log("Cannot replace with empty name");
            }
            else
            {
                console.log("editing a student entry: ", req.body.student);
                classList.edit(req.body.newVal, num);
            }
    });
module.exports = router;