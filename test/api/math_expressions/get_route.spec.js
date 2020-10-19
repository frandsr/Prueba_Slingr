const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../src/index")

describe("GET / Math Expressions", () => {
    it("Al mandar una expression matematica simple en un json (sin especificar precision), devuelve el resultado", (done) => {
        request(app).get("/api/")
            .query({
                "expression": "2*2+4"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("resultado");
                expect(parseInt(body.resultado)).to.equal(8);
                done();
            })
            .catch((err) => {
                console.log(err);
                done(err)
            })
    })
    it("Al mandar una expression matematica compleja en un json (sin especificar precision), devuelve el resultado", (done) => {
        request(app).get("/api/")
            .query({
                "expression": "(sqrt(9)+(9+3)*2)"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("resultado");
                expect(parseInt(body.resultado)).to.equal(27);
                done();
            })
    })
    it("Al mandar una expression matematica simple en un json sin especificar precision, devuelve el resultado", (done) => {
        request(app).get("/api/")
            .query({
                "expression": "1+8*3",
                "precision": "2"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("resultado");
                expect(Number(body.resultado)).to.equal(25.00000);
                done();
            })
    })
    it("Al mandar una expression matematica compleja en un json especificando precision, devuelve el resultado", (done) => {
        request(app).get("/api/")
            .query({
                "expression": "(sqrt(9)+(9+3)/2.2)",
                "precision": "3"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("resultado");
                expect(Number(body.resultado)).to.equal(8.455, "Los resultados no son exactamente iguales");
                done();
            })
    })

})
