const mongoose = require('mongoose');
require('dotenv').config()

connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString)
    .then(()=>console.log('connected to db'))
    .catch((err)=>console.log(err))