const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT  || 8080;
const cors = require('cors');
const phoneRoutes = require("./phoneRoutes");
const accessoryRoutes = require("./accessoryRoutes");
const send = require('./send');
const upload = require('./multer');

app.use(cors());

app.use(express.json());

app.use(express.static('assets'))

app.use('/phones', phoneRoutes );

app.use('/accessories' , accessoryRoutes);

app.use('/send' , send);

// app.use('/upload', upload );

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
