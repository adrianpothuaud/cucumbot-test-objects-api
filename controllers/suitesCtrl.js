const model = require('../models/suite')

async function saveSuite (obj) {
    return await obj.save();
};

async function createSuite (body) {
    return saveSuite(new model(body));
};

async function getSuites () {
    return await model.find();
};

async function getSuiteById (id) {
    return await model.findById(id);
};

async function updateSuiteById (id, update) {
    return await model.findByIdAndUpdate(id, update);
};

async function deleteSuiteById (id) {
    return await model.findByIdAndDelete(id);
};

module.exports = {
    saveSuite: saveSuite,
    createSuite: createSuite,
    getSuites: getSuites,
    getSuiteById: getSuiteById,
    updateSuiteById: updateSuiteById,
    deleteSuiteById: deleteSuiteById
}