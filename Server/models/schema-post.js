const mongoose = require("mongoose");
// Schame post
const Schema = require("mongoose").Schema;

const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescrption: {
    type: String,
  },
});

const Post = (module.exports = mongoose.model("Posts", PostSchema));

module.exports = Post;
