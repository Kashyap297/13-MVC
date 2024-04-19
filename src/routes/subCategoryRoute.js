const express = require('express')
const subCategory = require('../controller/subCategoryController')

const subCatRouter = express.Router()

subCatRouter.get('/', subCategory.get)
subCatRouter.post('/create', subCategory.create)

module.exports = subCatRouter