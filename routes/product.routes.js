// import express from "express";

// import { authSeller } from "../middlewares/authSeller.js";
// import {
//   addProduct,
//   changeStock,
//   getProductById,
//   getProducts,
// } from "../controller/product.controller.js";
// import { upload } from "../config/multer.js";
// const router = express.Router();

// router.post("/add", authSeller, upload.array("image", 4), addProduct);
// router.get("/list", getProducts);
// router.get("/id", getProductById);
// router.post("/stock", authSeller, changeStock);

// export default router;


import express from "express";

import { authSeller } from "../middlewares/authSeller.js";
import {
  addProduct,
  changeStock,
  getProductById,
  getProducts,
  deleteProduct, // ← Add this import from controller
} from "../controller/product.controller.js"; // Make sure deleteProduct exists in your controller
import { upload } from "../config/multer.js";

const router = express.Router();

router.post("/add", authSeller, upload.array("image", 4), addProduct);
router.get("/list", getProducts);
router.get("/id", getProductById);
router.post("/stock", authSeller, changeStock);

// **Add this DELETE route for admin**
router.delete("/delete/:id", authSeller, deleteProduct); // Only authenticated admin/seller can delete

export default router;
