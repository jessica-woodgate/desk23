const express = require('express');
const router = express.Router();
const dbController = require('../../dbController.js');

router.get('/', function(req, res){
   dbController.index(req,res);
});

router.get('/getCountries', function(req,res){
   dbController.listCountries(req,res);
});

module.exports = router;
