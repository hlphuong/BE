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
      res.send({"user_id": user.dataValues.id,
                "user_name":user.dataValues.name,
                "user_phone":user.dataValues.phone,
                "user_email":user.dataValues.email,
                "user_addres":user.dataValues.address,
                "user_avar":user.dataValues.avar,
                "user_age": user.dataValues.age,
                "user_access":user.dataValues.access})
      console.log(user.dataValues.avar)
    }
    else res.status(400).json({ msg: "Invalid credentials. " });

};
module.exports = {
  register,
  login
}