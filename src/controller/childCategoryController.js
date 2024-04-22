const childCategoryModel = require("../models/childCategoryModel")

const childCategoryController = {
    get: async (req, res) => {
        try {
            const childCategories = await childCategoryModel.find().populate({
                path: 'subCategoryId',
                populate: {
                    path: 'categoryId'
                }
            })
            res.send(childCategories)
        } catch (error) {
            console.log(error);
        }
    },

    create: async (req, res) => {
        try {
            const childCategory = await childCategoryModel.create(req.body)
            res.send(childCategory)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = childCategoryController