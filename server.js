// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');



// Setup database
//const db = require('./db') 

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/LiteracyRates')));

/*****************************************
//For database

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dataPopulation');
mongoose.Promise = global.Promise;
********************************************/
app.use(express.json());

// Set our api routes
app.use('/api', api);



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/LiteracyRates/index.html'));
});

//Error treatment
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.get("/dataPopulation", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/Entity/:id", (request, response) => {
    collection.findOne({ "Entity": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/LiteracyRates/:id", (request, response) => {
    collection.findOne({ "Literacy_rates": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get('/get_Country_name', function (req, res) {
    // Prepare output in JSON format
    response = {
        Country_name: req.query.country_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
