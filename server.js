const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = 'likes.json';

// Ensure the data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ likes: 0 }));
}

// Route to get the current like count
app.get('/likes', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(data);
});

// Route to increase the like count
app.post('/like', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    data.likes += 1;
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
