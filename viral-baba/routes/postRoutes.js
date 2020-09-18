const express = require("express");

const postController = require("./../controller/postController");

const router = express.Router();

router.route("/").get(postController.getPage).post(postController.postCreate);

module.exports = router;
