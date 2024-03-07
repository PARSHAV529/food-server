const mongoose = require('mongoose');



const cartItemSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  userEmail: { type: String, required: true },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem
