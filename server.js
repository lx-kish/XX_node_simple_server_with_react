const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        {
            id:1,
            username:'Alex'
        },
        {
            id:2,
            username:'Francis'
        }
    ])
})

app.get('/api/cars', (req, res) => {
    res.json([
        {
            id:1,
            brand:'Toyota'
        },
        {
            id:2,
            brand:'Volkswagen'
        }
    ])
})

const port = process.env.PORT || 3001;

app.listen(port)