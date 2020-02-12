const mongoose = require('mongoose');
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
    });

    it('Create a new case', async (done) => {
        // Create a new case
        const cresponse = await supertest.post('/api/v1/cases')
            .send({
                name: 'Sample case',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(cresponse.status).toBe(201);
        expect(cresponse.body).toHaveProperty("_id");
        expect(cresponse.body).toHaveProperty("name", "Sample case");
        expect(cresponse.body).toHaveProperty("description", "Sample description");
        expect(cresponse.body).toHaveProperty("steps", []);
        // get list of cases
        const lresponse = await supertest.get('/api/v1/cases');
        // verify response
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(1);
        done();
    });

    it('Create a new param', async (done) => {
        // Create a new param
        const cresponse = await supertest.post('/api/v1/params')
            .send({
                name: 'foo',
                type: 'String',
                value: 'bar',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(cresponse.status).toBe(201);
        expect(cresponse.body).toHaveProperty("_id");
        expect(cresponse.body).toHaveProperty("name", "foo");
        expect(cresponse.body).toHaveProperty("type", "String");
        expect(cresponse.body).toHaveProperty("value", "bar");
        expect(cresponse.body).toHaveProperty("description", "Sample description");
        // get list of params
        const lresponse = await supertest.get('/api/v1/params');
        // verify response
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(1);
        done();
    });

    it('Create a new phrase', async (done) => {
        // Create a new phrase
        const cresponse = await supertest.post('/api/v1/phrases')
            .send({
                expression: 'I want to use url',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(cresponse.status).toBe(201);
        expect(cresponse.body).toHaveProperty("_id");
        expect(cresponse.body).toHaveProperty("expression", "I want to use url");
        expect(cresponse.body).toHaveProperty("description", "Sample description");
        expect(cresponse.body).toHaveProperty("parameters", []);
        // get list of phrases
        const lresponse = await supertest.get('/api/v1/phrases');
        // verify response
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(1);
        done();
    });

    it('Create a new step', async (done) => {
        // Create a new step
        const cresponse = await supertest.post('/api/v1/steps')
            .send({
                name: 'Sample step',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(cresponse.status).toBe(201);
        expect(cresponse.body).toHaveProperty("_id");
        expect(cresponse.body).toHaveProperty("name", "Sample step");
        expect(cresponse.body).toHaveProperty("description", "Sample description");
        expect(cresponse.body).toHaveProperty("phrases", []);
        // get list of steps
        const lresponse = await supertest.get('/api/v1/steps');
        // verify response
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(1);
        done();
    });

    it('Create a new suite', async (done) => {
        // Create a new suite
        const cresponse = await supertest.post('/api/v1/suites')
            .send({
                name: 'Sample suite',
                description: 'Sample description'
            })
            .set('Accept', 'application/json');
        // verify response
        expect(cresponse.status).toBe(201);
        expect(cresponse.body).toHaveProperty("_id");
        expect(cresponse.body).toHaveProperty("name", "Sample suite");
        expect(cresponse.body).toHaveProperty("description", "Sample description");
        expect(cresponse.body).toHaveProperty("cases", []);
        // get list of suites
        const lresponse = await supertest.get('/api/v1/suites');
        // verify response
        expect(lresponse.status).toBe(200);
        expect(lresponse.body.length).toBe(1);
        done();
    });
});
