const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');


//Route to get all posts
router.get('/', (req, res) => {
    Post.findAll({

    })

});


//Route to find one post by ID
router.get('/post/:id', (req, res) => {
    Post.findOne({
        
    })

});

module.exports = router;