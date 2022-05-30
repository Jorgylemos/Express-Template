import express from 'express';
const app = express();

async function App() {
    app.get('/', (req, res) => {
        res.send('Hello world');
    });
}

export async function Port(port: any) {
    app.listen(port);
}

export default App;