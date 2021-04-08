//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var LiteracyRatesSchema = new Schema({
  country: {type: String, required: true, maxlength: 100},
  code: {type: String, required: false, maxlength: 4},
  year: {type: Number},
  literacyRates: {type: Number},
});

//virtual for country name (like a getter)
LiteracyRatesSchema
.virtual('country_name')
.get(function(){
   return this.country;
});
//virtual for code
LiteracyRatesSchema
.virtual('country_code')
.get(function(){
   return this.code;
});
//virtual for year
LiteracyRatesSchema
.virtual('year_recorded')
.get(function(){
   return this.year;
});
//virtual for literacy rates
LiteracyRatesSchema
.virtual('data_recorded')
.get(function(){
   return this.literacyRates;
});
//virtual for country URL - useful to get particular instance of a model
LiteracyRatesSchema
.virtual('url')
.get(function(){
   return '/catalog/literacyRates'+this._id;
})
// Compile model from schema
//var LiteracyModel = mongoose.model('LiteracyModel', LiteracyModelSchema );
module.exports = mongoose.model('LiteracyModel', LiteracyRatesSchema);
