const categoryModel = require("../models/categoryModel")

const categoryController = {
    get : async (req, res) =>{
        try {
            const categories = await categoryModel.find()
            res.send(categories)
        } catch (error) {
            console.log(error)
        }
    },
    create : async (req, res) => {
        try {
            const categories = await categoryModel.create(req.body)
            res.send(categories)
        } catch (error) {
            console.log(error)
            res.status(500).send('error while inserting data')
        }
    }
}

module.exports = categoryController;