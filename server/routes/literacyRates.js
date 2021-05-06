const express = require('express');
const router = express.Router();
const dbController = require('../../dbController.js');

router.get('/', function(req, res){
   dbController.index(req,res);
});

router.get('/getLiteracyRates', function(req,res){
   dbController.listLiteracyRates(req,res);
});

module.exports = router;
