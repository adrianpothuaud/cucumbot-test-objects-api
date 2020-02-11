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

describe('Creation of resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('Create a new case', async (done) => {
        const response = await supertest.post('/api/v1/cases')
            .send({
                name: 'Sample case',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(201);
        done();
    });

    // it('Create a new param', async (done) => {
        
    //     done();
    // });

    // it('Create a new phrase', async (done) => {
        
    //     done();
    // });

    // it('Create a new step', async (done) => {
        
    //     done();
    // });

    // it('Create a new suite', async (done) => {
        
    //     done();
    // });
});
