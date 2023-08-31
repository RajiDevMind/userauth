const UserModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../asyncWrapper");

const register = asyncWrapper(async (req, res) => {
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
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ err: "Kindly provide valid mail and password!" });
  }

  const userDetails = await UserModel.findOne({ email });
  if (!userDetails) {
    res.status(400).json({ hey: "Invalid email!" });
  }
  const validPassword = bcrypt.compareSync(password, userDetails.password);
  if (!validPassword) {
    res.status(422).json("Invalid Password!");
  }
  const jwtSecret = "ytgfdcvbjiuyhtgf";
  const token = jwt.sign({ userID: userDetails._id }, jwtSecret, {
    expiresIn: "30d",
  });
  res.json({ userDoc: { resp: userDetails.name }, token });
});

module.exports = {
  register,
  login,
};
