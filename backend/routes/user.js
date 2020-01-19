let router = require('express').Router()

var UserController = require("../controllers/user")

router.route('/signup')
    .post(UserController.new)

router.route('/signin')
    .post(UserController.signin)

module.exports = router