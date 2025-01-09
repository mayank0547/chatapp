const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://PraveenMaharaj:Maharaj@cluster0.jyfzyay.mongodb.net/?retryWrites=true&w=majority', ()=> {
  console.log('connected to mongodb')
})
