import express from 'express';
import { ENV } from './lib/env.js';
import path from 'path';
import { cwd } from 'process';

// make app
const app = express();

const __dirname = path.resolve();

app.get('/home', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Success from backend home"
    })
})

app.get('/books', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Success from backend books"
    })
})

// make ready for deployment
if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend', 'dist')))
    app.get('/{*any}', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'))
    })
}

// run the server
app.listen(ENV.PORT, () => {
    console.log(`Server is running on ${ENV.PORT} port.`)
})