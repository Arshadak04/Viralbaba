const Post = require("./../model/postModel");

exports.postCreate = async (req, res, next) => {
  try {
    console.log(req.body);
    const newContent = await Post.create(req.body.ckeditor);
    console.log(newContent);

    res.send("Successfully inserted!");
  } catch (error) {
    console.log(error);
  }
};

exports.getPage = (req, res) => {
  res.render("index");
};
