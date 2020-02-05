const mongoose = require('mongoose');

module.exports = mongoose.model("Case", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    steps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Step'
    }]
}));