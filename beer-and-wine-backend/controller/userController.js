import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import signInToken from "../config/auth.js";

const registerUser = async (req, res) => {
  const token = req.params.token;
  const { username, email, password } = jwt.decode(token);
  const isAdded = await User.findOne({ email: email });

  if (isAdded) {
    const token = signInToken(isAdded);
    return res.send({
      token,
      username: isAdded.username,
      email: isAdded.email,
      message: "Email Already Verified!",
    });
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_FOR_VERIFY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Token Expired, Please try again!",
        });
      } else {
        const newUser = new User({
          username,
          email,
          password: bcrypt.hashSync(password, 10),
        });
        newUser.save();
        const token = signInToken(newUser);
        res.send({
          token,
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          message: "Email Verified, Please Login Now!",
        });
      }
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.registerEmail });

    if (
      user &&
      user.password &&
      bcrypt.compareSync(req.body.password, user.password)
    ) {
      const token = signInToken(user);
      res.send({
        token,
        _id: user._id,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(401).send({
        message: "Invalid user or password!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

export { registerUser, loginUser };
