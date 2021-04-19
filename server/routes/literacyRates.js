const express = require('express');
const router = express.Router();
const dbController = require('../../dbController.js');

router.get('/', function(req, res){
   dbController.index(req,res);
});

router.post('/addLiteracyRates', function(req,res){
   dbController.create(req,res);
});

router.get('/getLiteracyRates', function(req,res){
   dbController.list(req,res);
});

module.exports = router;
