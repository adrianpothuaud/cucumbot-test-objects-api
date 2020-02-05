const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/suitesCtrl');

router.post('/', async (req, res) => {
    try {
        const result = await ctrl.createSuite(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await ctrl.getSuites();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await ctrl.getSuiteById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const result = await ctrl.updateSuiteById(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await ctrl.deleteSuiteById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router