const mongoose = require('mongoose');
const mms = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const supertest = request(app);

describe('Errors on update resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.set('useFindAndModify', false);
        const db = mongoose.connection;
        done();
    })

    it('Handles id error on update a case', async (done) => {
        const firstCaseId = "blablabla";
        const uresponse = await supertest.patch('/api/v1/cases/' + firstCaseId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        expect(uresponse.status).toBe(500);
        expect(uresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on update a param', async (done) => {
        const firstParamId = "blablabla";
        const uresponse = await supertest.patch('/api/v1/params/' + firstParamId)
            .send({
                name: 'Updated',
                type: "Updated",
                value: "Updated",
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        expect(uresponse.status).toBe(500);
        expect(uresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on update a phrase', async (done) => {
        const firstPhraseId = "blablabla";
        const uresponse = await supertest.patch('/api/v1/phrases/' + firstPhraseId)
            .send({
                expression: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        expect(uresponse.status).toBe(500);
        expect(uresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on update a step', async (done) => {
        const firstStepId = "blablabla";
        const uresponse = await supertest.patch('/api/v1/steps/' + firstStepId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        expect(uresponse.status).toBe(500);
        expect(uresponse.body).toHaveProperty("message");
        done();
    });

    it('Handles id error on update a suite', async (done) => {
        const firstSuiteId = "blablabla";
        const uresponse = await supertest.patch('/api/v1/suites/' + firstSuiteId)
            .send({
                name: 'Updated',
                description: 'Updated'
            })
            .set('Accept', 'application/json');
        expect(uresponse.status).toBe(500);
        expect(uresponse.body).toHaveProperty("message");
        done();
    });
});
