const PORT = 8000
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require('./db');


const app = express()

app.use(cors());
app.use(bodyParser.json());
app.options("*", cors());


app.get('/', (req, res) => {
    res.json("Hello to tiktok")
})

app.use("/tiktok/", require("./routes/tiktok.routes"));


app.listen(PORT, () => console.log('Server running on port ' + PORT))