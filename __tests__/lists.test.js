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

describe('List of resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('List of cases', async (done) => {
        await Case.collection.insertMany(casesData);
        const response = await supertest.get('/api/v1/cases');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0].name).toBe("Sample case");
        expect(response.body[0].description).toBe("Sample description");
        expect(response.body[0].steps.length).toBe(0);
        done();
    });

    it('List of params', async (done) => {
        await Param.collection.insertMany(paramsData);
        const response = await supertest.get('/api/v1/params');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0].name).toBe("foo");
        expect(response.body[0].type).toBe("String");
        expect(response.body[0].value).toBe("bar");
        expect(response.body[0].description).toBe("Sample description");
        done();
    });

    it('List of phrases', async (done) => {
        await Phrase.collection.insertMany(phrasesData);
        const response = await supertest.get('/api/v1/phrases');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0].expression).toBe("I want to use url");
        expect(response.body[0].description).toBe("Sample description");
        expect(response.body[0].parameters.length).toBe(0);
        done();
    });

    it('List of steps', async (done) => {
        await Step.collection.insertMany(stepsData);
        const response = await supertest.get('/api/v1/steps');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0].name).toBe("Sample step");
        expect(response.body[0].description).toBe("Sample description");
        done();
    });

    it('List of suites', async (done) => {
        await Suite.collection.insertMany(suitesData);
        const response = await supertest.get('/api/v1/suites');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0].name).toBe("Sample suite");
        expect(response.body[0].description).toBe("Sample description");
        done();
    });
});
