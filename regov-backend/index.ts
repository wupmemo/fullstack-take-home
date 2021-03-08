
import express from "express";
const app = express();


app.get('/', (req, res) => {
    res.send('Making a GET request.');
});

app.post('/', (req, res) => {
    res.send('Making a POST request');
});


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening on PORT ${port}`));