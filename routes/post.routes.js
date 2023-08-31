const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, getMyPosts, updatePost } = require('../controllers/post.controller.js');
const { verifyToken } = require('../middlewares/middlewares.js');

router.post('/post', createPost);

router.get('/', getPosts);

router.get('/session', verifyToken, getPosts);

router.get('/product/:id', verifyToken, getPostById);

router.get('/myPosts', getMyPosts);

router.put('/editpost/:id', verifyToken, updatePost)

module.exports = router;