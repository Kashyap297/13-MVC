const subCategoryModel = require("../models/subCategoryModel")

const subCategory = {
    get: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.find().populate('categoryId')
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
    },

    update: async (req, res) => {   
        try {
            let { id } = req.params;
            const newData = req.body;
            const updateSubCategory = await subCategoryModel.findByIdAndUpdate(id, newData, {new : true})
            res.send(updateSubCategory)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = subCategory;