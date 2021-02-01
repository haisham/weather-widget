process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");

const server = require("../../server");

describe("POST /weather", () => {
    it(
        "OK, sending query to weather API",
        (done = () => {
            request(server)
                .post("/weather")
                .send({ city: "copenhagen" })
                .then(res => {
                    const body = res.body;
                    expect(body).to.contain.property("data");
                    expect(body.cod).to.equal(200);
                    done();
                })
                .catch(err => done(err));
        })
    );

    it(
        "Not OK, sending bad query to weather API",
        (done = () => {
            request(server)
                .post("/weather")
                .send({ city: "winterfell" })
                .then(res => {
                    const body = res.body;
                    expect(body).to.contain.property("data");
                    expect(body.cod).to.equal(404);
                    done();
                })
                .catch(err => done(err));
        })
    );

    it(
        "Not OK, sending empty query to weather API",
        (done = () => {
            request(server)
                .post("/weather")
                .send({})
                .then(res => {
                    const body = res.body;
                    expect(body).to.contain.property("data");
                    expect(body.cod).to.equal(400);
                    done();
                })
                .catch(err => done(err));
        })
    );

});