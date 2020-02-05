const model = require('../models/step')

module.exports = {

    saveStep: async (obj) => {
        return await obj.save();
    },

    createStep: async (body) => {
        return this.saveStep(new model(body));
    },

    getSteps: async () => {
        return await model.find();
    },

    getStepById: async (id) => {
        return await model.findById(id);
    },

    updateStepById: async (id, update) => {
        return await model.findByIdAndUpdate(id, update);
    },

    deleteStepById: async (id) => {
        return await model.findByIdAndDelete(id);
    }
    
}