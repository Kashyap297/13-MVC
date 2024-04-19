const express = require('express');
const dbConnection = require('./config/db');
const Config = require('./config');
const app = express()
const PORT = Config.PORT || 5000;


// dbConnection
dbConnection();


app.listen(PORT, (err) => {
    if (err) {
        console.log("Server not connected");
    }
    console.log(`Listening on http://localhost:${PORT}`);
})