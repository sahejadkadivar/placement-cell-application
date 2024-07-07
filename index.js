import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
// setting dotenv for use system specific environment
dotenv.config({ path: path.resolve('config/.env') });

import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import ejsLayouts from 'express-ejs-layouts';
import passportLocal from './config/passport-local-strategy.js';
import router from './routes/index.js';
import db from './config/mongoose.js';

const port = process.env.PORT || 8000;  // Use 8080 as default if PORT is not set


// Create an Express.js application (a framework for building web applications in Node.js)
const app = express();

// set ejs as view engine and setting directory for views
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(ejsLayouts);
app.use(
	session({
		secret: "secret", // SECRET is stored in the system veriable
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 24*60*60*1000 }, // 1 day
	})
);
app.use(express.static(path.join(path.resolve(), 'public')));
// to parse incoming request and make data available in req.body 
app.use(express.urlencoded({ extended: true }));

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


// express router
app.use('/', router);

app.listen(port, function(error){
    if(error){
        console.log(`Error in connecting to server: ${error}`);
        return;
    }
    console.log(`Server running on port: ${port}`);
});
