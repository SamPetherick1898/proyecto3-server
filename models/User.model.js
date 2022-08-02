const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
      // unique: true -> Ideally, should be unique, but its up to you
    },
    rol: {
      type: String,
      required: true,
      enum: ["usuario", "administrador"]
    },
    url: {
      type: String,
      required: true,
      default: "https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 2
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  },
);

const User = model("User", userSchema);

module.exports = User;
