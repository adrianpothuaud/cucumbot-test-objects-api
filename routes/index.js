const express = require('express');
const router = express.Router();
const wRouter = require('./welcome');
const apiRouter = require('./api');

router.use('/', wRouter);
router.use('/api', apiRouter);

module.exports = router;