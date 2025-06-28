const express = require('express');
const router = express.Router();
const { createOrder,getUserOrders,getOrderById, getAllOrders,updateOrderStatus} = require('../controllers/orderController');
const  authenticate  = require('../middleware/auth');
const isAdmin = require("../middleware/admin");

router.post('/place-order', authenticate, createOrder);
router.get("/get-all-order", authenticate,getUserOrders);
router.get("/:order_id", authenticate, getOrderById);
router.get("/admin/get-all-order", authenticate, isAdmin, getAllOrders);
router.put("/admin/status/:order_id", authenticate, isAdmin, updateOrderStatus);
// router.put("/cancel/:id", authenticate, orderController.cancelOrder);

module.exports = router;
