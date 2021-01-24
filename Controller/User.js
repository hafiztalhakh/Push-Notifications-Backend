const User = require('../Model/User');

exports.saveToken = (req, res, next) => {
    const { deviceToken } = req.body;

    const user = new User({
        deviceToken
    });

    user
        .save()
        .then(user => {
            res.status(201).json({
                message: "Token saved"
            })
        })
        .catch(err => {
            console.log(err);
            if (err.statusCode === 500) {
                res.status(500).json({
                    message: "Internal server error"
                })
            } else {
                res.status(err.statusCode).json({
                    message: err.errorMessage,
                    err: err
                })
            }

        })
};
