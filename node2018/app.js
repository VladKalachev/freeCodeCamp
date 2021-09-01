
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/example', (req, res) => {
    res.send('example router');
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    const { name, age } = req.params;
    res.send(`${name}: ${age}`);
})

app.listen(3000);
