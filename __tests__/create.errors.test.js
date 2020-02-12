const mongoose = require('mongoose');
const mms = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const supertest = request(app);

describe('Errors on create resources', () => {

    beforeAll(async (done) => {
        const mongoServer = new mms.MongoMemoryServer();
        const URI = await mongoServer.getUri();
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection;
        done();
    });

    it('Handles error on case creation', async (done) => {
        const response = await supertest.post('/api/v1/cases')
            .send({
                foo: 'bar'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        done();
    });

    it('Handles error on param creation', async (done) => {
        const response = await supertest.post('/api/v1/params')
            .send({
                foo: 'bar'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        done();
    });

    it('Handles error on phrase creation', async (done) => {
        const response = await supertest.post('/api/v1/phrases')
            .send({
                foo: 'bar'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        done();
    });

    it('Handles error on step creation', async (done) => {
        const response = await supertest.post('/api/v1/steps')
            .send({
                foo: 'bar'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        done();
    });

    it('Handles error on suite creation', async (done) => {
        const response = await supertest.post('/api/v1/suites')
            .send({
                foo: 'bar'
            })
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        done();
    });
});