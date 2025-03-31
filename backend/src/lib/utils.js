import jwt from "jsonwebtoken";

export const generateToken= (userId, res)=>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });


  //After creating a token we are sending it back with the help of a cookie

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //Prevent xss attacks cross site scripting attack
    sameSite : "strict", //CRSF cross side request forgery attacks
    secure: process.env.NODE_ENV !== "development",

  });

  return token;
  
}