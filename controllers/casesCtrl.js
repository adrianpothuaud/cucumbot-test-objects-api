const model = require('../models/case')

async function saveCase (obj) {
    return await obj.save();
};

async function createCase (body) {
    return saveCase(new model(body));
};

async function getCases () {
    return await model.find();
};

async function getCaseById (id) {
    return await model.findById(id);
};

async function updateCaseById (id, update) {
    return await model.findByIdAndUpdate(id, update);
};

async function deleteCaseById (id) {
    return await model.findByIdAndDelete(id);
};

module.exports = {
    saveCase: saveCase,
    createCase: createCase,
    getCases: getCases,
    getCaseById: getCaseById,
    updateCaseById: updateCaseById,
    deleteCaseById: deleteCaseById
}