const Post = require("../models/schema-post");

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const NewPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UpdatePost = async (req, res) => {
  const id = req.params.id;
  const post = await req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, ...post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const DeletedPost = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const deletedPost = await Post.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Post Deleted Successfully", deletedPost });
    } else {
      res.status(400).json({ message: "Invalid Id" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  NewPost,
  GetPosts,
  UpdatePost,
  DeletedPost,
};
