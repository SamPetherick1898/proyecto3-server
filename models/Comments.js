const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentsSchema = new Schema({
    comment: {
        type: String,
        minLength: 5
    },
    user: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

module.exports = mongoose.model("Comments", CommentsSchema)