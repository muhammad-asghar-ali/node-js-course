import * as request from 'supertest';
import app from "../app.js"

// const request = require('supertest');
// const app = require('../app.js')

describe("Test GET /lanuches", () => {
    test('it should be respond with 200 success', async() => {
        const response = await request(app)
            .get('/api/launches')
            .expect('Content-type', /json/)
            .expect(200)
            // .expect(response.statusCode).toBe(200)
    })
})

describe("Test POST /lanuch", () => {
    const launchData = {
        mission: "Kepler exploration 1",
        rocket: "Explorer IS1 a",
        target: "Kelper-442 a",
        launchDate: "2030-12-27T08:00:00.000Z"
    }
    const launchDatawithoutDate = {
        mission: "Kepler exploration 1",
        rocket: "Explorer IS1 a",
        target: "Kelper-442 a",
    }

    const launchDatawithInvalidDate = {
        mission: "Kepler exploration 1",
        rocket: "Explorer IS1 a",
        target: "Kelper-442 a",
        launchDate: "Zoot"
    }
    test('it should be respond with 201 success', async() => {
        const response = await request(app)
            .post('/api/launches')
            .send(launchData)
            .expect('Content-type', /json/)
            .expect(200)
            // .expect(response.statusCode).toBe(200)
        const reqDate = new Date(launchData.launchDate).valueOf()
        const resDate = new Date(response.body.launchDate).valueOf()
        expect(resDate).toBe(reqDate)
        expect(response.body).toMatchObject(launchDatawithoutDate)
    })

    test('it should catch missing required properties', async() => {
        const response = await request(app)
            .post('/api/launches')
            .send(launchDatawithoutDate)
            .expect('Content-type', /json/)
            .expect(400)
        expect(response.body).toStringEqual({
            error: "missing required launch property"
        })
    })

    test('it should catch invalid dates', async() => {
        const response = await request(app)
            .post('/api/launches')
            .send(launchDatawithInvalidDate)
            .expect('Content-type', /json/)
            .expect(400)
        expect(response.body).toStringEqual({
            error: "invalid launch date"
        })
    })
})