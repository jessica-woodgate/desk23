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

/*
// Retrieve all LiteracyRate data from the database by Entity.
exports.findAll = (req, res) => {
    const Entity = req.query.Entity;
    var condition = Entity ? { Entity: { $regex: new RegExp(Entity), $options: "i" } } : {};

    crossCountryLiteracyRates.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Unable to retrieving Entity."
            });
        });
};

// Find specific LiteracyRate Data with id field
exports.findOne = (req, res) => {
    const id = req.params.id;

    crossCountryLiteracyRates.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Literacy Rates not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Literacy Rates with id" + id });
        });
};
*/