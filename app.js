const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const admin = require('../Utils/Admin')
const userRoute = require('./Routes/User');

// Database Connection URI For Development
const MONGO_DATABASE_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jylna.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8080;

if (userToken) {
    var payload = {
        notification: {
            title: "Order Confirmed",
            body: `Thank You For Ordering, Your Order Will Be Delivered To You.`
        },
    }
}
const options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};
admin.messaging().sendToDevice(userToken, payload, options)
    .then(response => {
    })
    .catch(error => {
        res.status(500).json({
            message: "Internal Server Error",
        });
    })

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);

mongoose
    .connect(MONGO_DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(result => {
        app.listen(PORT, () => {
            console.log('\u001b[' + 34 + 'm' + `Server started in ${process.env.NODE_ENV} mode on port: ${PORT} and Connected to ${process.env.MONGO_DEFAULT_DATABASE} Database` + '\u001b[0m');
        });
    })
    .catch(err => {
        console.log(err);
    })









