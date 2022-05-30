const { Path_Config } = require('./@Express-Config')
const express = require('express');
const app = express();

async function App() {

    Path_Config(app, 'ejs', '../views', '../public')

    app.get('/', (req, res) => {
        res.render('index');
    });
}

async function Port(port) {
    app.listen(port)
}

module.exports = {
    App,
    Port
}