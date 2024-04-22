const mongoose = require('mongoose')

const childCatSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategories"
    }
})

module.exports = mongoose.model('childcategories', childCatSchema)