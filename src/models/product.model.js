const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "name": {type: String, required: true},
    "newPrice": {type: Number, required: true},
    "image" : {type: String, required: true}
})


let Product = mongoose.model("product", productSchema)
module.exports = Product