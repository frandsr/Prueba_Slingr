const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../src/index")

describe("POST / Math Expressions", () => {
    it("Al mandar una expression matematica simple en un json (sin especificar precision), devuelve el resultado", (done) => {
        request(app).post("/api/")
            .send({
                "expression": "2*2+4"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property("resultado");
                expect(parseInt(body.resultado)).to.equal(8);
                done();
            })
    })
    it("Al mandar una expression matematica compleja en un json (sin especificar precision), devuelve el resultado", (done) => {
        request(app).post("/api/")
            .send({
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
        request(app).post("/api/")
            .send({
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
        request(app).post("/api/")
            .send({
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
