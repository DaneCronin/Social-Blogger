const router = require('express').Router();
const {User, Post, Comment} = require('../../models');


//Route to get all Comments
router.get('/', (req, res) => {
    Comment.findAll({
        
    })

});

//Route to get one Comment by ID
router.get('/:id', (req, res) => {
    Comment.findOne({

    })
});

//Route to create a new Comment
router.post('/', (req, res) => {
    Comment.create({


    })
});


module.exports = router;