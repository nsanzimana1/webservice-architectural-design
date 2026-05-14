const express = require('express');
const path = require('path');
const axios = require('axios');
const excelService = require('./services/excelService');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/assignment1', (req, res) => {
    res.render('assignment1');
});

app.get('/assignment2', (req, res) => {
    res.render('assignment2');
});

app.get('/combined', (req, res) => {
    res.render('combined');
});

// Get data from Backend-One
app.get('/api/excel', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/api/assignment1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Cannot connect to Backend-One' });
    }
});

// Send email to Backend-Two
app.post('/api/send-email', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3002/api/send-email', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Cannot connect to Backend-Two' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Frontend is running on http://localhost:${PORT}`);
});