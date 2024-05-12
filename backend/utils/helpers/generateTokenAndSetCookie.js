import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //prevents cross-site scripting(XSS) attacks
    maxAge: 1000 * 60 * 60 * 24 * 15, //miliseconds (it has to be in ms format)
    sameSite: "strict", //CSRF attacks crorr-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

export default generateTokenAndSetCookie;
