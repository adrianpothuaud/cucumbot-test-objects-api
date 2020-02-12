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

describe('Details of resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('Details of a case', async (done) => {
        await Case.collection.insertMany(casesData);
        const firstCaseId = (await Case.findOne())._id;
        const dresponse = await supertest.get('/api/v1/cases/' + firstCaseId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Sample case");
        expect(dresponse.body.description).toBe("Sample description");        
        expect(dresponse.body.steps.length).toBe(0);        
        done();
    });

    it('Details of a param', async (done) => {
        await Param.collection.insertMany(paramsData);
        const firstParamId = (await Param.findOne())._id;
        const dresponse = await supertest.get('/api/v1/params/' + firstParamId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("foo");
        expect(dresponse.body.type).toBe("String");        
        expect(dresponse.body.value).toBe("bar");        
        expect(dresponse.body.description).toBe("Sample description");        
        done();
    });

    it('Details of a phrase', async (done) => {
        await Phrase.collection.insertMany(phrasesData);
        const firstPhraseId = (await Phrase.findOne())._id;
        const dresponse = await supertest.get('/api/v1/phrases/' + firstPhraseId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.expression).toBe("I want to use url");
        expect(dresponse.body.description).toBe("Sample description");        
        expect(dresponse.body.parameters.length).toBe(0);        
        done();
    });

    it('Details of a step', async (done) => {
        await Step.collection.insertMany(stepsData);
        const firstStepId = (await Step.findOne())._id;
        const dresponse = await supertest.get('/api/v1/steps/' + firstStepId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Sample step");
        expect(dresponse.body.description).toBe("Sample description");        
        expect(dresponse.body.phrases.length).toBe(0);        
        done();
    });

    it('Details of a suite', async (done) => {
        await Suite.collection.insertMany(suitesData);
        const firstSuiteId = (await Suite.findOne())._id;
        const dresponse = await supertest.get('/api/v1/suites/' + firstSuiteId);
        expect(dresponse.status).toBe(200);
        expect(dresponse.body.name).toBe("Sample suite");
        expect(dresponse.body.description).toBe("Sample description");        
        expect(dresponse.body.cases.length).toBe(0);        
        done();
    });
});
