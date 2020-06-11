const express = require('express');
const app = express();
const port = process.env.PORT  || 8080;
const cors = require('cors');
const phoneRoutes = require("./phoneRoutes");
const accessoryRoutes = require("./accessoryRoutes")

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/phones', phoneRoutes );

app.use('/accessories' , accessoryRoutes)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
