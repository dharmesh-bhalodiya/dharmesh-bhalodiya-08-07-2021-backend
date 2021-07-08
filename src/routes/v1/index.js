const express = require('express');
const messageRoute = require('./message.route');

const router = express.Router();

router.use('/message', messageRoute);

module.exports = router;
