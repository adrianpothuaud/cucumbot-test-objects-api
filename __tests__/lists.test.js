const mongoose = require('mongoose');
const Case = require('../models/case');
const casesData = require('./data/casesList');
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
});
