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

exports.findDocumentByEntity = function (cb, entity){
   ModelLink.findOne({Entity: entity}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findDocumentByCode = function(cb, code){
   ModelLink.findOne({Code: code}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};
