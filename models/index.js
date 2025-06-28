const User= require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const CartItem = require("./CartItem");
const Category = require("./Category");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Payment = require("./Payment");
const Shipping = require("./Shipping");


User.hasOne(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

Cart.hasMany(CartItem, { foreignKey: 'cart_id' });
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });
CartItem.belongsTo(Product, { foreignKey: 'product_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

Order.hasOne(Shipping, { foreignKey: 'order_id' });
Shipping.belongsTo(Order, { foreignKey: 'order_id' });

Order.hasOne(Payment, { foreignKey: 'order_id' });
Payment.belongsTo(Order, { foreignKey: 'order_id' });




module.exports ={
    User,
    Cart,
    CartItem,
    Order,
    OrderItem,
    Category,
    Product,
    Payment,
    Shipping
}