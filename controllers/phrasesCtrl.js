const model = require('../models/phrase')

async function savePhrase (obj) {
    return await obj.save();
};

async function createPhrase (body) {
    return savePhrase(new model(body));
};

async function getPhrases () {
    return await model.find();
};

async function getPhraseById (id) {
    return await model.findById(id);
};

async function updatePhraseById (id, update) {
    return await model.findByIdAndUpdate(id, update);
};

async function deletePhraseById (id) {
    return await model.findByIdAndDelete(id);
};

module.exports = {
    savePhrase: savePhrase,
    createPhrase: createPhrase,
    getPhrases: getPhrases,
    getPhraseById: getPhraseById,
    updatePhraseById: updatePhraseById,
    deletePhraseById: deletePhraseById
}