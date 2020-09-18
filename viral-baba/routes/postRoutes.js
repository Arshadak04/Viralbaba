const express = require('express')

const postController = require('./../controller/postController')

const router = express.Router();


router
  .route('/posts')
  
  .post(postController.postCreate);

  module.exports = router;