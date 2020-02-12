const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/stepsCtrl');

router.post('/', async (req, res) => {
    try {
        const result = await ctrl.createStep(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    const result = await ctrl.getSteps();
    res.json(result);
})

router.get('/:id', async (req, res) => {
    try {
        const result = await ctrl.getStepById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const result = await ctrl.updateStepById(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await ctrl.deleteStepById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router