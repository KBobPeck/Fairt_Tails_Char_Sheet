const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  chars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Char",
    },
  ],
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
