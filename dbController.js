const path = require('path');
const LiteracyModel = ('./models/literacyRates');
const ModelLink = require('./db.js');
const crossCountryLiteracyRates = ('crossCountryLiteracyRates');

//export index
exports.index = function(req, res) {
   res.sendFile(path.resolve('src/index.html'));
};

exports.create = function(req, res) {
   var newData = new LiteracyModel(req.body);
   console.log(req.body);
   newData.save(function(err){
      if(err){
         res.status(400).send('Unable to save literacy rates to database');
      }else{
         res.redirect('/literacyRates/getLiteracyRates');
      }
   })
};

//list contents of database
exports.list = function(req, res) {
   ModelLink.find({}, function(err, literacyRates){
      if(err){
         return res.send(500, err);
      }
      res.send(literacyRates);
   });
};

// Retrieve all LiteracyRate data from the database by Entity.
exports.findAll = (req, res) => {
    const entity = req.query.entity;
    var condition = entity ? { entity: { $regex: new RegExp(entity), $options: "i" } } : {};
  LiteracyModelLink.find(condition)
        .then(data => {
            res.send(Data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Unable to retrieving Entity."
            });
        });
};

//Find Literacy by Code
exports.FindCode = (req, res) => {
  const code = req.query.code;
  var condition = code ? { code: { $regex: new RegExp(code), $options: "i" } } : {};
  LiteracyModelLink.find(condition)
    .then(Data => {
      res.send(Data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Unable to retrieving Entity by code."
      });
    });
};

//Find Literacy by year
exports.FindYear = (req, res) => {
  const year = req.query.year;
  var condition = year ? { year: { $regex: new RegExp(year), $options: "i" } } : {};
  LiteracyModelLink.find(condition)
    .then(Data => {
      res.send(Data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Unable to retrieving Entity by year."
      });
    });
};

// Find specific LiteracyRate Data with Entity
exports.findOne = (req, res) => {
  const entity = req.params.entity;
  LiteracyModelLink.find(entity)
    .then(Data => {
      if (!Data)
        res.status(404).send({ message: "Literacy Rates not found with Entity " + Entity });
      else res.send(Data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Literacy Rates with Entity" + Entity });
    });
};


//Find Literacy data with code & year
exports.FindCodeYear = (req, res) => {
  var condition = {code : code, year: year};
  LiteracyModelLink.find(condition)
    .then(Data => {
      res.send(Data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Unable to retrieving Entity by code and year."
      });
    });
};

//Find By Entity & year
exports.FindEntityYear = (req, res) => {
  var condition = { entity : entity, year: year };
  LiteracyModelLink.find(condition)
    .then(Data => {
      res.send(Data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Unable to retrieving Entity by Entity and Year."
      });
    });
};
