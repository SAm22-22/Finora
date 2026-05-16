const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

// HASH PASSWORD
userSchema.pre("save", async function (next) {

  // IF PASSWORD NOT MODIFIED
  if (!this.isModified("password")) {
    return next();
  }

  // HASH PASSWORD
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(
    enteredPassword,
    this.password
  );
};

module.exports = userSchema;