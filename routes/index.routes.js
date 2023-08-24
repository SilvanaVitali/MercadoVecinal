const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/session', (req, res) => {
    res.render('session')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/post', (req, res) => {
    res.render('post')
});

router.get('/myposts', (req, res) => {
    res.render('myposts')
});

router.get('/product', (req, res) => {
    res.render('product')
});

router.get('/editpost', (req, res) => {
    res.render('editpost')
});

module.exports = router;