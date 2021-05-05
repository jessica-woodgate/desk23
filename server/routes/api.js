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
router.get("/", function (req, res, next) {
  dbController.findAll(req, res, next);
});

router.get("/", function (req, res, next) {
  dbController.FindCode(req, res, next);
});

router.get("/", function (req, res, next) {
  dbController.FindYear(req, res, next);
});

router.get("/", function (req, res, next) {
  dbController.FindCodeYear(req, res, next);
});

router.get("/", function (req, res, next) {
  dbController.FindEntityYear(req, res, next);
});

router.post("/", function (req, res, next) {
    dbController.create);
});

router.delete("/", function (req, res, next) {
    dbController.delete);
});

module.exports = router;
