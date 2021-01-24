const admin = require("firebase-admin");

const serviceAccount = require('../hazirsainstore-privatekey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jylna.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`
});
 

module.exports = admin