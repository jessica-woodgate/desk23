const express = require('express');
const router = express.Router();
const data = require('./data.json');

/**********************
//const Literacy = require('./dataPopulation')
router.get('/Literacy', function (req, res, next) {
    Literacy.find({}).then(function (dataPopulation) {
        res.send(dataPopulation);
    }).catch(next);
});
************************/

/* GET api listing. */
//someone makes a request for /api, and this is what controls what they get back
router.get('/', function (req, res) {
   //specifying a header - can be read by requester, can tell it the format of the payload
  res.header("Content-Type",'application/json');
  //ensuring data is sent back in the format of a string
  res.send(JSON.stringify(data));
});

module.exports = router;
