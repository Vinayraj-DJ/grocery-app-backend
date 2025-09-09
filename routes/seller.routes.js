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


import express from "express";
import { authSeller } from "../middlewares/authSeller.js";
import {
  isAuthSeller,
  sellerLogin,
  sellerLogout,
} from "../controller/seller.controller.js";

const router = express.Router();

/**
 * Test route - GET /
 * This will respond if you just visit /api/seller in the browser
 */
router.get("/", (req, res) => {
  res.json({ message: "Seller route works!" });
});

/**
 * POST /login
 * Route for seller login
 */
router.post("/login", sellerLogin);

/**
 * GET /is-auth
 * Route to check if seller is authenticated
 * Requires authSeller middleware
 */
router.get("/is-auth", authSeller, isAuthSeller);

/**
 * GET /logout
 * Route for seller logout
 * Requires authSeller middleware
 */
router.get("/logout", authSeller, sellerLogout);

export default router;
