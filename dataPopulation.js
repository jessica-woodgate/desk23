#! /usr/bin/env node

var async = require('async')
var LiteracyModel = require('literacyModel')

var mongoose = require('mongoose');

const {
   MONGO_USERNAME,
   MONGO_PASSWORD,
   MONGO_HOSTNAME,
   MONGO_PORT,
   MONGO_DB
} = process.env;

const options = {
   useNewUrlParser: true,
   reconnectTries: Number.MAX_VALUE,
   reconnectInterval: 500,
   connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
