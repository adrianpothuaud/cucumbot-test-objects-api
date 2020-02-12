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

describe('Update resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.set('useFindAndModify', false);
        const db = mongoose.connection;
        done();
    })

    it('Update a case', async (done) => {
        // insert test data
        await Case.collection.insertMany(casesData);
        // get first id
        const firstCaseId = (await Case.findOne())._id;
        // send update req
        const uresponse = await supertest.patch('/api/v1/cases/' + firstCaseId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(uresponse.status).toBe(200);
        // send details req
        const dresponse = await supertest.get('/api/v1/cases/' + firstCaseId);
        // verify updates
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Updated");
        expect(dresponse.body.description).toBe("Updated");
        expect(dresponse.body.steps.length).toBe(0);
        done();
    });

    it('Update a param', async (done) => {
        // insert test data
        await Param.collection.insertMany(paramsData);
        // get first id
        const firstParamId = (await Param.findOne())._id;
        // send update req
        const uresponse = await supertest.patch('/api/v1/params/' + firstParamId)
            .send({
                name: 'Updated',
                type: "Updated",
                value: "Updated",
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(uresponse.status).toBe(200);
        // send details req
        const dresponse = await supertest.get('/api/v1/params/' + firstParamId);
        // verify updates
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Updated");
        expect(dresponse.body.type).toBe("Updated");
        expect(dresponse.body.value).toBe("Updated");
        expect(dresponse.body.description).toBe("Updated");
        done();
    });

    it('Update a phrase', async (done) => {
        // insert test data
        await Phrase.collection.insertMany(phrasesData);
        // get first id
        const firstPhraseId = (await Phrase.findOne())._id;
        // send update req
        const uresponse = await supertest.patch('/api/v1/phrases/' + firstPhraseId)
            .send({
                expression: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(uresponse.status).toBe(200);
        // send details req
        const dresponse = await supertest.get('/api/v1/phrases/' + firstPhraseId);
        // verify updates
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.expression).toBe("Updated");
        expect(dresponse.body.description).toBe("Updated");
        done();
    });

    it('Update a step', async (done) => {
        // insert test data
        await Step.collection.insertMany(stepsData);
        // get first id
        const firstStepId = (await Step.findOne())._id;
        // send update req
        const uresponse = await supertest.patch('/api/v1/steps/' + firstStepId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(uresponse.status).toBe(200);
        // send details req
        const dresponse = await supertest.get('/api/v1/steps/' + firstStepId);
        // verify updates
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Updated");
        expect(dresponse.body.description).toBe("Updated");
        done();
    });

    it('Update a suite', async (done) => {
        // insert test data
        await Suite.collection.insertMany(suitesData);
        // get first id
        const firstSuiteId = (await Suite.findOne())._id;
        // send update req
        const uresponse = await supertest.patch('/api/v1/suites/' + firstSuiteId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(uresponse.status).toBe(200);
        // send details req
        const dresponse = await supertest.get('/api/v1/suites/' + firstSuiteId);
        // verify updates
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Updated");
        expect(dresponse.body.description).toBe("Updated");
        done();
    });
});
