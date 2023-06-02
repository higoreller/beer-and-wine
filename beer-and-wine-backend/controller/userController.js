import User from "../models/User.js";
import bcrypt from "bcrypt";
import signInToken from "../config/auth.js";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isAdded = await User.findOne({ email: email });

    if (isAdded) {
      return res.status(409).send({
        message: "Email already registered!",
      });
    }

    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save();

    const token = signInToken(newUser);

    res.send({
      token,
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      message: "User registered successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { registerEmail, password } = req.body;
    const user = await User.findOne({ email: registerEmail });

    if (user && bcrypt.compareSync(password, user.password)) {
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
