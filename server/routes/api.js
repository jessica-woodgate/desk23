const express = require('express');
const router = express.Router();
const data = require('./data.json')

/**********************
//const Literacy = require('./dataPopulation')
router.get('/Literacy', function (req, res, next) {
    Literacy.find({}).then(function (dataPopulation) {
        res.send(dataPopulation);
    }).catch(next);
});
************************/

/* GET api listing. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

module.exports = router;
