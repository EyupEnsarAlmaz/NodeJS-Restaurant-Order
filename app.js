const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const httpStatusCode = require("http-status-codes");
var cors = require("cors");

var app = require('express')();
const router = require('express').Router();

const port = process.env.PORT || 5001;

const socketConstants = require("./constants/socketConstants");

var http = require('http').Server(app);
var io = require('socket.io')(http);

const userController = require("./controllers/userController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/ChatApp", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => console.log(port));

app.use(userController.router());