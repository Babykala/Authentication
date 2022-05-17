const jwt = require("jsonwebtoken");

//const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI4MzBhMTUzMTlhYWQ5YWRmNGE3YThmIiwiZW1haWwiOiJiYWJ5a2FsYUBnbWFpbC5jb20iLCJpYXQiOjE2NTI3NTc5MzgsImV4cCI6MTY1Mjc3NTkzOH0.epA9ZwP3AlPruasIzjNTpe5mW2AZ9fE7rp1A89MRinQ"
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["token"];
    
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  //console.log(jwt.verify(token,'secret',process.env.JWT_SECRET_KEY))
  //console.log(req.user)
  try {
    const decoded = jwt.verify(token,'secret',process.env.JWT_SECRET_KEY );
    req.user = decoded;
    console.log(req.user)
    } 
  catch(err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
