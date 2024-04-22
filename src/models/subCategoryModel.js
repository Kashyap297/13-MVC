const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categories'
    }
})

module.exports = mongoose.model('subcategories', subCategorySchema)