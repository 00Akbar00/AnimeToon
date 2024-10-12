const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connectDB function
require('dotenv').config();
const app = express();
const webtoonRoutes = require('./routes/webtoonRoutes');

// MongoDB Connection
connectDB(); // Call the function to connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/webtoons', webtoonRoutes);

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT);
});
