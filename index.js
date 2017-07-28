const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // this has to be before require services/passport
require('./services/passport'); //not returning anything

mongoose.connect(keys.mongoURI);


const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // i want this cookie to last for 30 days
    keys: [keys.cookieKey] // choose a random num/str to encrypt cookie
  })
);

require('./routes/authRoutes')(app);
// same as
// const authRoutes = require('./routes/authRoutes')
// authRoutes(app)



const PORT = process.env.PORT || 5000;

app.listen(PORT);
