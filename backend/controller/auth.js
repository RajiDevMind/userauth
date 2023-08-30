const UserModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const cryptDetails = { name, email, password: hashPassword };
  const userDetails = await UserModel.create({ ...cryptDetails });

  const jwtSecret = "0987uyhgbvnkuytrfd";
  const token = jwt.sign(
    { userID: userDetails._id, name: userDetails.name },
    jwtSecret,
    {
      expiresIn: "30d",
    }
  );
  res.json({ userDoc: { resp: userDetails }, token });
};
const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
