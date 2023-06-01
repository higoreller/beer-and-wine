import jwt from "jsonwebtoken";

const signInToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
};

export default signInToken;
