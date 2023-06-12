// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import taikhoan from "../models/taikhoan";
const db = require('../utils/db')

/* REGISTER USER */
 const register = async (req, res) => {
  try {
    const {
      name,
      age,
      phone,
      email,
      matkhau,
      picturePath,
      address,
    } = req.body;

    // const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new taikhoan({
      name,
      age,
      phone,
      email,
      matkhau,
      picturePath,
      address,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
 const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.taikhoan.findOne({where:{ email: email }});
    console.log(req.body)
    if (!user) res.status(400).json({ msg: "User does not exist. " });
    console.log(password == user.matkhau)
    if(password == user.matkhau)
    {
      console.log(user.dataValues.id)
      res.send({"user_id": user.dataValues.id})
    }
    else res.status(400).json({ msg: "Invalid credentials. " });

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // delete user.password;
    // res.status(200).json({ token, user });

};
module.exports = {
  register,
  login
}