const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "name": "Cucumbot Test Objects",
        "version": "0.0.1",
        "description": "REST microservice for test objects management.",
        "author": "Adrian Pothuaud",
        "links": [{
            "name": "API",
            "href": req.protocol + "://" + req.baseUrl + "/api"
        }]
    });
});

module.exports = router;