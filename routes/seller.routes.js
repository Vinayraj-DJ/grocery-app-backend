// import express from "express";
// import { authSeller } from "../middlewares/authSeller.js";
// import {
//   isAuthSeller,
//   sellerLogin,
//   sellerLogout,
// } from "../controller/seller.controller.js";
// const router = express.Router();
// router.post("/login", sellerLogin);
// router.get("/is-auth", authSeller, isAuthSeller);
// router.get("/logout", authSeller, sellerLogout);

// export default router;


// import express from "express";
// import { authSeller } from "../middlewares/authSeller.js";
// import { isAuthSeller, sellerLogin, sellerLogout } from "../controller/seller.controller.js";

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Seller route works!" });
// });

// router.post("/login", sellerLogin);
// router.get("/is-auth", authSeller, isAuthSeller);
// router.post("/logout", authSeller, sellerLogout);

// export default router;


import express from "express";
import { authSeller } from "../middlewares/authSeller.js";
import { isAuthSeller, sellerLogin, sellerLogout } from "../controller/seller.controller.js";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Seller route works!" });
});

// Seller login
router.post("/login", sellerLogin);

// Auth check (protected)
router.get("/is-auth", authSeller, isAuthSeller);

// Logout (unprotected ✅)
router.post("/logout", sellerLogout);

export default router;
