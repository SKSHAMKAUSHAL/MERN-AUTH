import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  console.log("UserAuth: Cookies received:", req.cookies); // Debug cookies

  if (!token) {
    console.log("UserAuth: No token found in cookies");
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    console.log("UserAuth: Verifying token:", token);
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("UserAuth: Token decoded:", tokenDecode);

    if (tokenDecode.id) {
      if (!req.body) {
        req.body = {};
      }
      req.body.userId = tokenDecode.id;
    } else {
      console.log("UserAuth: Token decode failed, no id found");
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    next();
  } catch (error) {
    console.error("UserAuth: Token verification error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;