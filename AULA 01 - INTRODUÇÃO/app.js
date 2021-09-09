var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1>Ola mundo</h1></body></html>");
});

app.get("/akio", (req, res) => {
    res.send("<html><body><h1>Ola mundo Akio</h1></body></html>");
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});