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

// Find all LiteracyRate data by Entity.
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

//Creat New Literacy Rates data
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a data
    const LiteracyRates = new LiteracyModel({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save literacy data in the database
    LiteracyRates
        .save(LiteracyRates)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred when creating new literacyrates data."
            });
        });
};

//Update literacyrates data as Object by COUNTRY
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const entity = req.params.entity;

    LiteracyModel.UpdatebyCountry(entity, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update literacy data for country=${entity}`
                });
            } else res.send({ message: "success" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error occurred when update data"
            });
        });
};

//Delete single literacy data for a country
exports.delete = (req, res) => {
    const entity = req.params.entity;

    LiteracyModel.delete(entity)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `data not found, delete failed`
                });
            } else {
                res.send({
                    message: "delete succeeded"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete data, server no response"
            });
        });
};