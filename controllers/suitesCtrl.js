const model = require('../models/suite')

module.exports = {

    saveSuite: async (obj) => {
        return await obj.save();
    },

    createSuite: async (body) => {
        return this.saveSuite(new model(body));
    },

    getSuites: async () => {
        return await model.find();
    },

    getSuiteById: async (id) => {
        return await model.findById(id);
    },

    updateSuiteById: async (id, update) => {
        return await model.findByIdAndUpdate(id, update);
    },

    deleteSuiteById: async (id) => {
        return await model.findByIdAndDelete(id);
    }
    
}