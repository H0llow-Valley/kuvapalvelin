const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
const host = 'localhost';

app.use('/img', express.static('kuvat'));
app.use('/includes', express.static('includes'));

app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'templates/index.html'))
);

app.get('/node', (req, res) => {
    res.send('Hello Node');
})

app.get('/henkilot', (req, res) => {
const userId = req.query.id;
const userName = req.query.nimi;

res.send(`Hei ${userName}! Sinun id on ${userId}.`);
});

app.use((req, res)=> {
    res.status(404).send("Sivua ei löytynyt.");
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
