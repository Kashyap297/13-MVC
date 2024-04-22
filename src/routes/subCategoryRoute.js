const express = require('express')
const subCategory = require('../controller/subCategoryController')

const subCatRouter = express.Router()

subCatRouter.get('/', subCategory.get)
subCatRouter.post('/create', subCategory.create)
subCatRouter.patch('/update/:id', subCategory.update)

module.exports = subCatRouter