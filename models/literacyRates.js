//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var LiteracyRatesSchema = new Schema({
  Entity: {type: String, required: true, maxlength: 100},
  Code: {type: String, required: false, maxlength: 100},
  Year: {type: Number},
  Data: {type: Number},
});

//virtual for country name (like a getter)
LiteracyRatesSchema
.virtual('country_name')
.get(function(){
   return this.Entity;
});
//virtual for code
LiteracyRatesSchema
.virtual('country_code')
.get(function(){
   return this.Code;
});
//virtual for year
LiteracyRatesSchema
.virtual('year_recorded')
.get(function(){
   return this.Year;
});
//virtual for literacy rates
LiteracyRatesSchema
.virtual('data_recorded')
.get(function(){
   return this.Data;
});
//virtual for country URL - useful to get particular instance of a model
LiteracyRatesSchema
.virtual('url')
.get(function(){
   return '/catalog/literacyRates'+this._id;
})

// Compile model from schema & export
module.exports = mongoose.model('LiteracyModel', LiteracyRatesSchema);
