import express from 'express';

import Path_Config from './@Express-Config-Typescript'

const app = express();

async function App() {

    /** Put Path_Config(Variable receive express, views folder, public folder) */
    Path_Config(app, 'ejs', '../views', '../public');

    app.get('/', (req, res) => {
        res.render('index');
    });
}

export async function Port(port: any) {
    app.listen(port);
}

export default App;