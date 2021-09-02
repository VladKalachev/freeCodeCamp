const express = require('express');
const path = require('path');
const app = express();
// app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname + '../public'));
app.set("view engine", "ejs");
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// })
app.get('/:userQuery', (req, res) => {
    res.render('index', {
        title: 'Title',
        data: {
            userQuery: req.params.userQuery
        }
    });
})

app.listen(3000);
