const mongoose = require('mongoose');
const Case = require('../models/case');
const Param = require('../models/param');
const Phrase = require('../models/phrase');
const Step = require('../models/step');
const Suite = require('../models/suite');
const casesData = require('./data/casesList');
const paramsData = require('./data/paramsList');
const phrasesData = require('./data/phrasesList');
const stepsData = require('./data/stepsList');
const suitesData = require('./data/suitesList');
const mms = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const supertest = request(app);

describe('Delete resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('Delete a case', async (done) => {
        await Case.collection.insertMany(casesData);
        const firstCaseId = (await Case.findOne())._id;
        const dresponse = await supertest.delete('/api/v1/cases/' + firstCaseId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body).toHaveProperty("_id");
        const lresponse = await supertest.get('/api/v1/cases');
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(3);
        done();
    });

    it('Delete a param', async (done) => {
        await Param.collection.insertMany(paramsData);
        const firstParamId = (await Param.findOne())._id;
        const dresponse = await supertest.delete('/api/v1/params/' + firstParamId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body).toHaveProperty("_id");
        const lresponse = await supertest.get('/api/v1/params');
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(3);
        done();
    });

    it('Delete a phrase', async (done) => {
        await Phrase.collection.insertMany(phrasesData);
        const firstPhraseId = (await Phrase.findOne())._id;
        const dresponse = await supertest.delete('/api/v1/phrases/' + firstPhraseId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body).toHaveProperty("_id");
        const lresponse = await supertest.get('/api/v1/phrases');
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(3);
        done();
    });

    it('Delete a step', async (done) => {
        await Step.collection.insertMany(stepsData);
        const firstStepId = (await Step.findOne())._id;
        const dresponse = await supertest.delete('/api/v1/steps/' + firstStepId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body).toHaveProperty("_id");
        const lresponse = await supertest.get('/api/v1/steps');
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(3);
        done();
    });

    it('Delete a suite', async (done) => {
        await Suite.collection.insertMany(suitesData);
        const firstSuiteId = (await Suite.findOne())._id;
        const dresponse = await supertest.delete('/api/v1/suites/' + firstSuiteId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body).toHaveProperty("_id");
        const lresponse = await supertest.get('/api/v1/suites');
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(3);
        done();
    });
});
