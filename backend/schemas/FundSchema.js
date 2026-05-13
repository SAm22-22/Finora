const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  availableMargin: {
    type: Number,
    default: 0,
  },

  usedMargin: {
    type: Number,
    default: 0,
  },

  availableCash: {
    type: Number,
    default: 0,
  },

  openingBalance: {
    type: Number,
    default: 0,
  },

  payin: {
    type: Number,
    default: 0,
  },
});

module.exports = { FundsSchema };