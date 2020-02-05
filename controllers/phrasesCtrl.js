const model = require('../models/phrase')

module.exports = {

    savePhrase: async (obj) => {
        return await obj.save();
    },

    createPhrase: async (body) => {
        return this.savePhrase(new model(body));
    },

    getPhrases: async () => {
        return await model.find();
    },

    getPhraseById: async (id) => {
        return await model.findById(id);
    },

    updatePhraseById: async (id, update) => {
        return await model.findByIdAndUpdate(id, update);
    },

    deletePhraseById: async (id) => {
        return await model.findByIdAndDelete(id);
    }
    
}