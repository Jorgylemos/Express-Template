const express = require('express');
const app = express();

async function App() {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
}

async function Port(port) {
    app.listen(port)
}

module.exports = {
    App,
    Port
}