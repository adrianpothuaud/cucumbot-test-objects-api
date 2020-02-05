const mongoose = require('mongoose');

module.exports = mongoose.model("Step", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    phrases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phrase'
    }]
}));