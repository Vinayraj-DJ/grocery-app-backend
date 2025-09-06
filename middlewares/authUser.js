import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try{
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    console.error("Error in authUser middleware:", error);
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};

export default authUser;
