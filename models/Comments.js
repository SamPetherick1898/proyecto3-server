const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    comment: {
        type: String,
        minLength: 5
    }
}, { timestamps: true })

module.exports = mongoose.model("Comments", CommentsSchema)