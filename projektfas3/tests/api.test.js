const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('ska returnera 200 och HTML', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/html/);
    });
});
