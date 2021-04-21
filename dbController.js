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

//list contents of database
exports.listLiteracyRates = function(req, res) {
   LiteracyModelLink.find({}, function(err, literacyRates){
      if(err){
         return res.send(500, err);
      }
      res.send(literacyRates);
   });
};

//removes whole collection
exports.removeLiteracyModel = function(cb){
   LiteracyModelLink.remove({}, function(err, result){
      if(err){
         console.log(err);
      }else{
         console.log(result);
      }
   });
};

exports.findLiteracyByEntity = function (entity){
   console.log('entity: '+entity);
   LiteracyModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findLiteracyByCode = function(code){
   LiteracyModelLink.find({Code: code}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findLiteracyByYear = function(year){
   LiteracyModelLink.find({Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findLiteracyByCodeYear = function(code, year){
   LiteracyModelLink.find({Code: code, Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findLiteracyByEntityYear = function(entity, year){
   LiteracyModelLink.find({Entity: entity, Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

/*****
   controller functions for coordinates collection
****/

exports.listCoordinates = function(req, res) {
   CoordinatesModelLink.find({}, function(err, coordinates){
      if(err){
         return res.send(500, err);
      }
      res.send(coordinates);
   });
};

exports.removeCoordinatesModel = function(cb){
   CoordinatesModelLink.remove({}, function(err, result){
      if(err){
         console.log(err);
      }else{
         console.log(result);
      }
   });
};

exports.findCoordinateByEntity = function(entity){
   CoordinatesModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
      }
   })
};

/*****
   controller functions for linking coordinates and literacy rates
*****/

exports.linkCoordinatesLiteracyRates = function(entity){
   CoordinatesModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         console.log(err);
      }else{
         console.log(results);
      }
   })
};
