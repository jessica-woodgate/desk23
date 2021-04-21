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

exports.findByEntity = function (entity){
   console.log('entity: '+entity);
   ModelLink.find({Entity: new RegExp(entity, 'i')}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findByCode = function(code){
   ModelLink.find({Code: code}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findByYear = function(year){
   ModelLink.find({Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findByCodeYear = function(code, year){
   ModelLink.find({Code: code, Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

exports.findByEntityYear = function(entity, year){
   ModelLink.find({Entity: entity, Year: year}, function(err, results){
      if(err){
         return handleError(err)
      }else{
         console.log(results)
      }
   });
};

//removes whole collection
exports.remove = function(cb){
   ModelLink.remove({}, function(err, result){
      if(err){
         console.log(err);
      }else{
         console.log(result);
      }
   });
}
