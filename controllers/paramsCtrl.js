const model = require('../models/param')

module.exports = {

    saveParam: async (obj) => {
        return await obj.save();
    },

    createParam: async (body) => {
        return this.saveParam(new model(body));
    },

    getParams: async () => {
        return await model.find();
    },

    getParamById: async (id) => {
        return await model.findById(id);
    },

    updateParamById: async (id, update) => {
        return await model.findByIdAndUpdate(id, update);
    },

    deleteParamById: async (id) => {
        return await model.findByIdAndDelete(id);
    }
    
}