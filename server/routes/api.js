const express = require('express');
const router = express.Router();
const data = require('./data.json')

/* GET api listing. */
//someone makes a request for /api, and this is what they get back
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

module.exports = router;
