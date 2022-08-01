const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PublicationsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    description: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    image: {
        img: "",
        required: false 
    }
}, { timestamps: true })

module.exports = mongoose.model("Publications", PublicationsSchema)