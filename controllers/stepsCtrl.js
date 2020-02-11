const model = require('../models/step')

async function saveStep (obj) {
    return await obj.save();
};

async function createStep (body) {
    return saveStep(new model(body));
};

async function getSteps () {
    return await model.find();
};

async function getStepById (id) {
    return await model.findById(id);
};

async function updateStepById (id, update) {
    return await model.findByIdAndUpdate(id, update);
};

async function deleteStepById (id) {
    return await model.findByIdAndDelete(id);
};

module.exports = {
    saveStep: saveStep,
    createStep: createStep,
    getSteps: getSteps,
    getStepById: getStepById,
    updateStepById: updateStepById,
    deleteStepById: deleteStepById
}