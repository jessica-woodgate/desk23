const path = require('path');
const LiteracyModel = ('./models/literacyRates');
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
   LiteracyModel.find({}, function(err, literacyRates){
      if(err){
         return res.send(500, err);
      }
      res.render('getLiteracyRates', {
         literacyRates: literacyRates
      });
   });
};
