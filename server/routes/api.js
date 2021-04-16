const express = require('express');
const router = express.Router();
const data = require('./data.json')

/* GET api listing. */
//someone makes a request for /api, and this is what controls what they get back
router.get('/', function (req, res) {
   //specifying a header - can be read by requester, can tell it the format of the payload
  res.header("Content-Type",'application/json');
  //ensuring data is sent back in the format of a string
  res.send(JSON.stringify(data));
});

module.exports = router;
