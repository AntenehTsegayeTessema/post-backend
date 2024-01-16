
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoute = require('./routes/posts.js');
const express = require('express');

const app=express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Import Routes
//const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);

// Routes


// Connect to DB
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// How to we start listening to the server

app.listen(4001);


