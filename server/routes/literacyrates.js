const express = require('express');
const router = express.Router();
const dbController = require('../../dbController.js');

router.get('/', function (req, res) {
  dbController.index(req, res);
});

router.post('/addLiteracyRates', function (req, res) {
  dbController.create(req, res);
});

router.get('/getLiteracyRates', function (req, res) {
  dbController.list(req, res);
});

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

module.exports = router;
