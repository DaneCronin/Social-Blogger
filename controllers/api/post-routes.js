const router = require('express').Router();
const {User, Post, Comment} = require('../../models');


//Route to get all Posts
router.get('/', (req, res) => {
   Post.findAll({
        
    })

});

//Route to get one Post by ID
router.get('/:id', (req, res) => {
    Post.findOne({

    })
});

//Route to create a new post
router.post('/', (req, res) => {
    Post.create({


    })
});


module.exports = router;