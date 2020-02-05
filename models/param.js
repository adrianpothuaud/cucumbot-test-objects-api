const mongoose = require('mongoose');

module.exports = mongoose.model("Param", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}));