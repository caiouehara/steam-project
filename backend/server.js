const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log('MongoDB database connection established successfully');
})

const companyRouter = require('./routes/company.route');
const indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use('/company', companyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});