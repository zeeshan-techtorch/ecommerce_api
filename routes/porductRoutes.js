const express = require('express');
const router = express.Router();
const upload = require("../utils/multerConfig")
const { createProduct, getAllProduct, getProductById} = require("../controllers/productController");
const authenticate = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

router.post("/create-product",authenticate,isAdmin,upload.single("image"),createProduct)
router.get("/get-all-product",getAllProduct);
router.get("/:product_id",getProductById);



module.exports = router;