const User = require("../models/user");
// const { userValidation } = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const {userValidation} = require("../middleware/userValidation")
exports.new = async function(req, res) {
  // const { error } = userValidation(req.body);
  // // throw warning when wrong input
  // if (error) return res.status(400).send(error.details[0].message);
  const {error} = userValidation(req.body)
  if (error) return res.status(400).send(error)
  // check for double account
  const userExist = await User.findOne({ username: req.body.username });
  if (userExist)
    return res.status(400).send("Username already exists");

  var user = new User({
    username: req.body.username,
    password: req.body.password
  });
  await user.save((err, response) => {
    if (err) res.send(err);
    res.send({
      msg: "signup successfully",
      data: response._id
    });
  });
};

exports.signin = async function(req, res) {
  // const { error } = userValidation(req.body);
  // throw warning when wrong input
  // if (error) return res.status(400).send('Please enter a valid account');
  const error = userValidation(req.body)
  if (error) return res.status(400).send(error)
  // check if account exists
  const userExist = await User.findOne({ username: req.body.username });
  if (!userExist)
    return res.status(400).send("Email or password is wrong");
  // check if password is correct
  const validPass = await bcrypt.compare(req.body.password, userExist.password);
  if (!validPass)
    return res.status(400).send("Email or password is wrong");

  // create and assign a token 
  const accessToken = jwt.sign({username: req.body.username},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'})
  res.header("authToken",accessToken).send({ msg: "login successfully" });
};
