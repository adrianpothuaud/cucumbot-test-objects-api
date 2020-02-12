const mongoose = require('mongoose');
const mms = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const supertest = request(app);

describe('Errors on delete resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('Handles id error on delete a case', async (done) => {
        const firstCaseId = "blablabla";
        const dresponse = await supertest.delete('/api/v1/cases/' + firstCaseId);
        expect(dresponse.status).toBe(500);
        expect(dresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on delete a param', async (done) => {
        const firstParamId = "blablabla";
        const dresponse = await supertest.delete('/api/v1/params/' + firstParamId);
        expect(dresponse.status).toBe(500);
        expect(dresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on delete a phrase', async (done) => {
        const firstPhraseId = "blablabla";
        const dresponse = await supertest.delete('/api/v1/phrases/' + firstPhraseId);
        expect(dresponse.status).toBe(500);
        expect(dresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on delete a step', async (done) => {
        const firstStepId = "blablabla";
        const dresponse = await supertest.delete('/api/v1/steps/' + firstStepId);
        expect(dresponse.status).toBe(500);
        expect(dresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on delete a suite', async (done) => {
        const firstSuiteId = "blablabla";
        const dresponse = await supertest.delete('/api/v1/suites/' + firstSuiteId);
        expect(dresponse.status).toBe(500);
        expect(dresponse.body).toHaveProperty("message");
        done();
    });
});
