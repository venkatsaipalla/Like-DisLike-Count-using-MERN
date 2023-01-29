const mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
  id: {
    type: "string",
    unique: true,
    required: true,
  },
  likes_count: {
    type: Number,
    default: 0,
  },
  dislikes_count: {
    type: Number,
    default: 0,
  },
});
module.exports = LikeDisLikeCountTable = mongoose.model(
  "LikeDisLikeCountTable",
  addSchema
);
