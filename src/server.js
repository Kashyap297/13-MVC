const express = require('express');
const dbConnection = require('./config/db');
const Config = require('./config');
const catRouter = require('./routes/categoryRoute');
const subCatRouter = require('./routes/subCategoryRoute');
const app = express()
const PORT = Config.PORT || 5000;

// parseBody
app.use(express.urlencoded({ extended: false }))

// dbConnection
dbConnection();

// routes
app.use('/category', catRouter)
app.use('/subcategory', subCatRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server not connected");
    }
    console.log(`Listening on http://localhost:${PORT}`);
})