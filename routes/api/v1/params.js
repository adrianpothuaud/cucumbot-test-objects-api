const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/paramsCtrl');

router.post('/', async (req, res) => {
    try {
        const result = await ctrl.createParam(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await ctrl.getParams();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await ctrl.getParamById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const result = await ctrl.updateParamById(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const result = await ctrl.deleteParamById(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router