const express = require('express');
const router = express.Router();

const dbController = require('../../dbController.js');


/* GET api listing. 
//someone makes a request for /api, and this is what controls what they get back
router.get('/', function (req, res) {
   //specifying a header - can be read by requester, can tell it the format of the payload
  res.header("Content-Type",'application/json');
  //ensuring data is sent back in the format of a string
  res.send(JSON.stringify(data));
});
*/

// Retrieve all Data
router.get("/", dbController.findAll);

router.get("/", dbController.FindCode);

router.get("/", dbController.FindYear);

router.get("/", dbController.findOne);

router.get("/", dbController.FindCodeYear);

router.get("/", dbController.FindEntityYear);
module.exports = router;
