const { Router } = require('express')
const childCategoryController = require('../controller/childCategoryController')
// const express = require('express')

const childCatRouter = Router()

childCatRouter.get('/', childCategoryController.get)
childCatRouter.post('/create', childCategoryController.create)

module.exports = childCatRouter