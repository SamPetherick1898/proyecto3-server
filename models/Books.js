const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BooksSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    url: {
        type: String,
        minLength: 5
    },
    pages: {
        type: Number,
        trim: true,
        min: 0,
        required: true
    },
    editorial: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Books", BooksSchema)