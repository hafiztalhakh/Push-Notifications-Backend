const router = require('express').Router();

const { saveToken } = require('../Controller/User');

router.get('/save-token', saveToken);

module.exports = router;
