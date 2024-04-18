const mongoose = require('mongoose')

const dbConection = async () => {
    try {
        await mongoose.connect()
        console.log('Server Connected')
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConection;