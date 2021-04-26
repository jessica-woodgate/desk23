const path = require('path');
const LiteracyModel = ('./models/literacyRates');
const ModelLink = require('./db.js');
const crossCountryLiteracyRates = ('crossCountryLiteracyRates');

const LiteracyModelLink = ModelLink.LiteracyModel;
const CoordinatesModelLink = ModelLink.CoordinatesModel;

//export index
exports.index = function(req, res) {
   res.sendFile(path.resolve('src/index.html'));
};

/*****
   controller functions for literacy rates collection
****/

exports.createLiteracyRates = function(req, res) {
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

//list contents of database, send to router
exports.listLiteracyRates = function(req, res) {
   LiteracyModelLink.find({}, function(err, literacyRates){
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

//removes whole collection
exports.removeLiteracyModel = function(cb){
   LiteracyModelLink.remove({}, function(err, result){
      if(err){
         console.log(err);
      }else{
         //will show how many items were deleted
         console.log(result);
      }
   });
};

exports.findLiteracyByEntity = function (entity){
   console.log('entity: '+entity);
   LiteracyModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         return handleError(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

exports.findLiteracyByCode = function(code){
   LiteracyModelLink.find({Code: code}, function(err, results){
      if(err){
         return handleError(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

exports.findLiteracyByYear = function(year){
   LiteracyModelLink.find({Year: year}, function(err, results){
      if(err){
         return handleError(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

exports.findLiteracyByCodeYear = function(code, year){
   LiteracyModelLink.find({Code: code, Year: year}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

exports.findLiteracyByEntityYear = function(entity, year){
   LiteracyModelLink.find({Entity: entity, Year: year}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

/*****
   controller functions for coordinates collection
****/
//lists contents of database and sends to router
exports.listCoordinates = function(req, res) {
   CoordinatesModelLink.find({}, function(err, coordinates){
      if(err){
         return res.send(500, err);
      }
      res.send(coordinates);
   });
};

exports.removeCoordinatesModel = function(cb){
   CoordinatesModelLink.remove({}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
         return results;
      }
   });
};

exports.findCoordinateByEntity = function(entity){
   CoordinatesModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
         return results;
      }
   })
};

/*****
   controller functions for linking coordinates and literacy rates
*****/

exports.LiteracyRatesFromCoordinates = function(entity){
   CoordinatesModelLink.find(
      {Entity: new RegExp(entity, 'i')},
      function(err, results1){
      if(err){
         console.log(err);
      }else{
         //get entity from coordinates query result and find literacy rates
         var entityResult = results1[0].toObject().Entity;
         LiteracyModelLink.find(
            {Entity: new RegExp(entityResult.toString(), 'i')},
            function(err, results2){
            if(err){
               console.log(err);
            }else{
               console.log(results1);
               console.log(results2);
               //returns literacy rates - to access each field do something like:
               //results1[0].toObject().Entity
               return results2;
            }
         })
      }
   })
};
