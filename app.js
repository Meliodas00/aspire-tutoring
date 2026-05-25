const express = require('express');
const session = require("express-session");
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

// for logging
app.use(morgan('tiny'));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// static files needed
app.use(express.static(path.join(__dirname, '/public')));

app.use(
    '/css',
    express.static(
        path.join(__dirname, '/node_modules/bootstrap/dist/css')
    )
);

app.use(
    '/js',
    express.static(
        path.join(__dirname, '/node_modules/bootstrap/dist/js')
    )
);

app.use(
    '/js',
    express.static(
        path.join(__dirname, '/node_modules/jquery/dist')
    )
);

// link up the database
mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("MongoDB Connected!");
})
.catch((err)=> {
    console.log(err)
});

// generate with node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

app.use(session({

    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }

}))

app.use((req, res, next) => {

    res.locals.user = req.session.user || null;
    next();

});

// routes Files

const contactRoutes = require("./routes/contactRoutes")

// use

app.use(contactRoutes);


// routes for pages

app.get("/offline", (req, res) => {

    res.render("offline");

});


app.get("/", (req, res) => {

    res.render("index", {
        title: "Home"
    });

});

app.get("/about", (req, res) => {

    res.render("about", {
        title: "About"
    });

});

app.get("/contact", (req, res) => {

    res.render("contact", {
        title: "Contact"
    });

});




module.exports = app;