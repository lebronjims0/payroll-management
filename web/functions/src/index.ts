const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const serviceAccount = require("./permission.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const express = require("express");
const app = express();
const db = firebase.firestore();

const cors = require("cors");
app.use(cors({origin: true}));
app.use(express.json());






exports.v1 = functions.https.onRequest(app);