
//node dependencies
//const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

//local dependencies
const mailRoute = require('./route/mail');

//implementation
const app = express();
app.use(express.json());
//enable cors use only test
app.use(cors({ origin: true }))

app.post('/mail/sendmail', cors({
    origin: "*",
    methods: "POST",
}), mailRoute.sendMail);

app.listen('5000')
//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


