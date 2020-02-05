const mongoose = require('mongoose');

module.exports = mongoose.model("Suite", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    cases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case'
    }]
}));