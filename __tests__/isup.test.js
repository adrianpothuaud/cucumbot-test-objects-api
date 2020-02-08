const mongoose = require('mongoose');
const mms = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const supertest = request(app);

describe('Service is Up !', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    })

    it('Responds on welcome endpoint', async (done) => {
        const response = await supertest.get('/');
        expect(response.status).toBe(200);
        done();
    });

    it('Responds on cases endpoint', async (done) => {
        const response = await supertest.get('/api/v1/cases');
        expect(response.status).toBe(200);
        done();
    });

    it('Responds on params endpoint', async (done) => {
        const response = await supertest.get('/api/v1/params');
        expect(response.status).toBe(200);
        done();
    });

    it('Responds on phrases endpoint', async (done) => {
        const response = await supertest.get('/api/v1/phrases');
        expect(response.status).toBe(200);
        done();
    });

    it('Responds on steps endpoint', async (done) => {
        const response = await supertest.get('/api/v1/steps');
        expect(response.status).toBe(200);
        done();
    });

    it('Responds on suites endpoint', async (done) => {
        const response = await supertest.get('/api/v1/suites');
        expect(response.status).toBe(200);
        done();
    });
});
