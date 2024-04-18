const express = require('express');
const dbConnection = require('./config/db');
const Config = require('./config');
const app = express()
const PORT = Config.PORT || 5000;


// dbConnection
dbConnection();


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})