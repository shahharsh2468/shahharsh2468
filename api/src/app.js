// require('dotenv').config();
const express = require("express");
const db = require("./database/conn");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.json());
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})

module.exports = app;

require('./controller/UserController');