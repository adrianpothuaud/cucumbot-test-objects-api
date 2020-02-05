const mongoose = require('mongoose');

module.exports = mongoose.model("Phrase", new mongoose.Schema({
    expression: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    parameters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Param'
    }]
}));