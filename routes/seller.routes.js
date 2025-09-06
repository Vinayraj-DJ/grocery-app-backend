import express from "express";
import { authSeller } from "../middlewares/authSeller.js";
import {
  isAuthSeller,
  sellerLogin,
  sellerLogout,
} from "../controller/seller.controller.js";
const router = express.Router();
router.post("/login", sellerLogin);
router.get("/is-auth", authSeller.apply, isAuthSeller);
router.get("/logout", authSeller, sellerLogout);

export default router;
