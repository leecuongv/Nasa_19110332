const express = require('express')
const cors = require('cors');
const path = require('path')
const morgan = require('morgan')
const request = require("supertest")

const planetsRouter = require('./routes/planets/planetsRouter');
//const planetsRouter = require("../src/")
const launchesRouter = require('./routes/launches/launchesRouter');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'))


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/public ')))

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/public ', 'index.html'))
    //E:\Learning\Mern_Stack\Nasa_19110332\server\public \index.html
});
request(app)
    .get("/launches")
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
        else console.log("get lauches success!")
    })
request(app)
    .post("/launches")
    .send(
        {
            "mission": "ZMT155",
            "rocket": "ZMT Experimental IS1",
            "target": "Kepler-186 f",
            "launchDate": "November 09, 2022"

        })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function (err, res) {
        if (err) throw err;
        else console.log("post lauches success!")
    });
request(app)
    .post("/launches/:id")
    .expect(404)
    .end(function (err, res) {
        if (err) throw err;
        else console.log("delete lauches success!")
    })

module.exports = app