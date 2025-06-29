const express = require('express');
const router = express.Router();
const { addToCart, getCart, removeFromCart,updateCartItem, clearCart } = require('../controllers/cartController');
const authenticate  = require('../middleware/auth');


router.post('/', authenticate, addToCart);
router.get("/",authenticate,getCart);
router.delete('/remove-item/:product_id', authenticate, removeFromCart);
router.put("/update-item/:item_id", authenticate,updateCartItem);
router.delete("/clear", authenticate, clearCart);
module.exports = router;