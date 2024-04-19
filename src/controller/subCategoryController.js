const subCategoryModel = require("../models/subCategoryModel")

const subCategory = {
    get: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.find()
            res.send(subcategory)
        } catch (error) {
            console.log(error);

        }
    },

    create: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.create(req.body)
            res.send(subcategory)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = subCategory;