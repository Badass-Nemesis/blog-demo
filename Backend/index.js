require('dotenv').config();
const express = require('express');
const db = require('./db'); // Import the database connection
const app = express();

app.use(express.json());

// Start the server 
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    // Example usage of the connection pool 
    db.execute('SELECT 1', (err, results) => {
        if (err) return console.error('Error executing query:', err);

        console.log('MySQL DB is connected');
    });
});
