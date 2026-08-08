import express  from "express";
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe, verifyRazorpay} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

// Admin feature
orderRouter.post("/list",adminAuth,allOrders);
orderRouter.post("/status",adminAuth,updateStatus);


//Payment feature
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/place/stripe",authUser,placeOrderStripe);
orderRouter.post("/place/razorpay",authUser,placeOrderRazorpay);


//user Feature
orderRouter.post("/userorders",authUser,userOrders);

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter;