const model = require('../models/case')

module.exports = {

    saveCase: async (obj) => {
        return await obj.save();
    },

    createCase: async (body) => {
        return this.saveCase(new model(body));
    },

    getCases: async () => {
        return await model.find();
    },

    getCaseById: async (id) => {
        return await model.findById(id);
    },

    updateCaseById: async (id, update) => {
        return await model.findByIdAndUpdate(id, update);
    },

    deleteCaseById: async (id) => {
        return await model.findByIdAndDelete(id);
    }
    
}