// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";



// export const authSeller = async (req, res, next) => {
//   const { sellerToken } = req.cookies;
//    try {
//   if (!sellerToken) {
//     return res.status(401).json({ message: "Unauthorized", success: false });
//   }
 
//     const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
//     if (decoded.email === process.env.SELLER_EMAIL) {
//       next();
//     } else {
//       return res.status(403).json({ message: "Forbidden", success: false });
//     }
//   } catch (error) {
//     console.error("Error in authSeller middleware:", error);
//     return res.status(401).json({ message: "Invalid token", success: false });
//   }
// };


import jwt from "jsonwebtoken";

export const authSeller = (req, res, next) => {
  try {
    const sellerToken = req.cookies?.sellerToken; // ✅ safe access

    if (!sellerToken) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (decoded.email === process.env.SELLER_EMAIL) {
      req.seller = decoded; // optional: attach seller info
      next();
    } else {
      return res.status(403).json({ message: "Forbidden", success: false });
    }
  } catch (error) {
    console.error("Error in authSeller middleware:", error);
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};
