// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes or other middleware here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});