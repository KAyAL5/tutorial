const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// Initialize the app
const app = express();

const config = require('./config/app.config');

// Import user routes
const userAPI = require("./lib/routes/user.route");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:4200'
}));

mongoose.set('useCreateIndex', true);
// Connect to Mongoose and set connection variable
mongoose.connect(config.mongoUrl);
const db = mongoose.connection;

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to Excel Software Services'));

// Use user Api routes in the App
app.use('/user', userAPI);

// Launch app to listen to specified port
app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});