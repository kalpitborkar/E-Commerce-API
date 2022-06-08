require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();


// database
const connectDB = require('./db/connect');