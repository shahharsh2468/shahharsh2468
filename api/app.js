// require('dotenv').config();
// const port = process.env.PORT;
const express = require("express");
const db = require("./database/conn");
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();
const port = 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
  origin: 'http://127.0.0.1:8080',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080/'); // Replace with the URL of your front-end application
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})

module.exports = app;

require('./controller/UserController');
require('./controller/ExpenseController');