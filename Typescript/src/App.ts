import express from 'express';

import Path_Config from './@Express-Config-Typescript'

const app = express();

async function App() {

    /** Put Path_Config(Variable receive express, views folder, public folder) */
    Path_Config({
        $express_app: app,
        $use_engine: 'ejs',
        $path_view: '../views',
        $path_public: '../public'
    });

    app.get('/', (req, res) => {
        res.render('index');
    });
}

export async function Port(port: any) {
    app.listen(port);
}

export default App;