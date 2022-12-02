
require('dotenv').config();
const dbConnect = require('./dbConnect/mongodb');
const express = require('express');
const app = express();

const portfolioRoute = require('./routes/portfolioRoute')

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

dbConnect();

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});
