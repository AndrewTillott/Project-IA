if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
};
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require('express');
const app = express();
const path = require('path');

const db = require('./server.js');
const dbAddition = require('./functions-lib/database-addition.js');
const formValidtaion = require('./functions-lib/from-validation.js')

app.use("/", express.static(__dirname));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/html/index.html'))
    console.log('home page loaded');
    if (Object.keys(req.query).length !== 0) {
        next();
    }
})

app.get('/', (req, res, next) => {
    if (formValidtaion(req.query).length === 0) {
        dbAddition(req.query);
    };
})

app.get('/influencer', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/html/influencer.html'))
    console.log('influencer page loaded')
})

app.get('/businesses', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/html/businesses.html'))
    console.log('businesses page loaded')
})

app.get('/Donate', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/html/Donate.html'))
    console.log('donate page loaded')
})

app.get('/team', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/html/team.html'))
    console.log('team page loaded')
})

app.get('/form', (req, res, next) => {
    console.log("I've heard you")
})

app.listen(2443, () => (console.log('app listenning on port 2443')));