import express from "express";
import bodyParser from "body-parser";

const app = express(); 
const cors = require('cors');
const port = 8080;

// All users in a list
let users = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    // We will be coding here
    res.send('User is now registered. Thank you');
});

app.listen(port, () => console.log(`listening on port ${port}!`));