const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    deviceToken: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
