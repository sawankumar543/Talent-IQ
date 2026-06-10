import express from 'express';
import { ENV } from './lib/env.js';

// make app
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Success from backend"
    })
})
app.get('/home', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Success from backend home"
    })
})

// run the server
app.listen(ENV.PORT, () => {
    console.log(`Server is running on ${ENV.PORT} port.`)
})