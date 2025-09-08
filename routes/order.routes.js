// import express from "express";
// import authUser from "../middlewares/authUser.js";
// import {
//   getAllOrders,
//   getUserOrders,
//   placeOrderCOD,
// } from "../controller/order.controller.js";
// import { authSeller } from "../middlewares/authSeller.js";

// const router = express.Router();
// router.post("/cod", authUser, placeOrderCOD);
// router.get("/user", authUser, getUserOrders);
// router.get("/seller", authSeller, getAllOrders);

// export default router;


import express from "express";
import authUser from "../middlewares/authUser.js";
import { authSeller } from "../middlewares/authSeller.js";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  cancelOrder,
} from "../controller/order.controller.js";

const router = express.Router();

// Place order (COD)
router.post("/cod", authUser, placeOrderCOD);

// Get orders for user
router.get("/user", authUser, getUserOrders);

// Get all orders for seller
router.get("/seller", authSeller, getAllOrders);

// Cancel order by user
router.patch("/cancel/:id", authUser, cancelOrder);

export default router;
