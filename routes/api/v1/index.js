const express = require('express');
const router = express.Router();
const casesRouter = require('./cases');
const paramsRouter = require('./params');
const phrasesRouter = require('./phrases');
const stepsRouter = require('./steps');
const suitesRouter = require('./suites');

router.use('/cases', casesRouter);
router.use('/params', paramsRouter);
router.use('/phrases', phrasesRouter);
router.use('/steps', stepsRouter);
router.use('/suites', suitesRouter);

module.exports = router