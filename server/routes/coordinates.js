const express = require('express');
const router = express.Router();
const dbController = require('../../dbController.js');

router.get('/getCoordinates', function(req, res){
   dbController.listCoordinates(req, res);
});

module.exports = router;
