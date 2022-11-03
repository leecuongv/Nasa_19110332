const express = require('express')
const cors = require('cors');
const path = require('path')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planetsRouter');
const launchesRouter = require('./routes/launches/launchesRouter');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'))


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/public ')))

app.use(planetsRouter);
app.use(launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public ','index.html'))
//E:\Learning\Mern_Stack\Nasa_19110332\server\public \index.html
}
)


module.exports = app