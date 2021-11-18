const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('./db/connect')

const posts = require('./routes/posts');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json({ limit: "30mb", extended:true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/posts',posts);

app.listen(port, console.log(`server is running on port ${port}`));
