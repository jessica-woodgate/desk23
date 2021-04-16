const express = require('express');
const router = express.Router();
const radarChart = require('../../src/app/radar-chart/radar-chart.html');

router.get('/', function (req, res){
   res.send(radarChart);
})

module.exports = router;
