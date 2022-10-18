const router = require('express').Router();
const {User, Post, Comment} = require('../../models');


//Route to get all Users
router.get('/', (req, res) => {
    User.findAll({
        
    })

});

//Route to get one User by ID
router.get('/:id', (req, res) => {
    User.findOne({

    })
});

//Route to create a new user
router.post('/', (req, res) => {
    User.create({


    })
});


module.exports = router;