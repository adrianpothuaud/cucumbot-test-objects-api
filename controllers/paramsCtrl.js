const model = require('../models/param')

async function saveParam (obj) {
    return await obj.save();
};

async function createParam (body) {
    return saveParam(new model(body));
};

async function getParams () {
    return await model.find();
};

async function getParamById (id) {
    return await model.findById(id);
};

async function updateParamById (id, update) {
    return await model.findByIdAndUpdate(id, update);
};

async function deleteParamById (id) {
    return await model.findByIdAndDelete(id);
};

module.exports = {
    saveParam: saveParam,
    createParam: createParam,
    getParams: getParams,
    getParamById: getParamById,
    updateParamById: updateParamById,
    deleteParamById: deleteParamById
}