// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import { connectDB } from "./config/connectDB.js";
// dotenv.config();
// const app = express();

// import userRoutes from "./routes/user.routes.js";
// import sellerRoutes from "./routes/seller.routes.js";
// import productRoutes from "./routes/product.routes.js";
// import cartRoutes from "./routes/cart.routes.js";
// import addressRoutes from "./routes/address.routes.js";
// import orderRoutes from "./routes/order.routes.js";

// import { connectCloudinary } from "./config/cloudinary.js";



// await connectCloudinary();
// // allow multiple origins
// const allowedOrigins = [
//   "http://localhost:5173", // local frontend 
//   // "https://grocery-app-frontend-dxs3-3f4zqn62k.vercel.app", // vercel frontend  
//    "https://grocery-app-frontend-sigma.vercel.app" // deployed frontend
// ];
// //middlewares
// app.use(express.json());
// connectDB();
// connectCloudinary()
// // app.use(cors({ origin: allowedOrigins, credentials: true }));

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// app.use(cookieParser());




// // Api endpoints
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRoutes);
// app.use("/api/seller", sellerRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/order", orderRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
  
//   console.log(`Server is running on port ${PORT}`);
// });




// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import { connectDB } from "./config/connectDB.js";
// import { connectCloudinary } from "./config/cloudinary.js";

// dotenv.config();
// const app = express();

// import userRoutes from "./routes/user.routes.js";
// import sellerRoutes from "./routes/seller.routes.js";
// import productRoutes from "./routes/product.routes.js";
// import cartRoutes from "./routes/cart.routes.js";
// import addressRoutes from "./routes/address.routes.js";
// import orderRoutes from "./routes/order.routes.js";

// // Connect DB and Cloudinary
// await connectCloudinary();
// connectDB();

// // allow multiple origins
// const allowedOrigins = [
//   "http://localhost:5173", // local frontend
 
//   "https://grocery-app-frontend-8x87.vercel.app", // deployed frontend
// ];

// // middlewares
// app.use(express.json());

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// // Api endpoints
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ✅ Fix: serve uploaded images correctly
// app.use("/images", express.static("uploads"));

// app.use("/api/user", userRoutes);
// app.use("/api/seller", sellerRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/order", orderRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import { connectCloudinary } from "./config/cloudinary.js";

dotenv.config();
const app = express();

// Routes
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";

// Connect DB and Cloudinary
await connectCloudinary();
connectDB();

// ✅ Allowed origins (no trailing slashes)
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://grocery-app-frontend-8x87.vercel.app", // deployed frontend
];

// Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Configure CORS properly
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow cookies
  })
);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Serve uploaded images
app.use("/images", express.static("uploads"));

// API endpoints
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
 