const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/casesCtrl');

router.post('/', async (req, res) => {
    try {
        const result = await ctrl.createCase(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await ctrl.getCases();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await ctrl.getCaseById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const result = await ctrl.updateCaseById(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await ctrl.deleteCaseById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router