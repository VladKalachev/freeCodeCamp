const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3000);
