const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  upc: {
    type: String
  },
  cost: {
    type: Number
  },
  price: {
    type: Number
  },
  discount: {
    type: Number
  },
  qty: {
    type: Number
  },
  reorder: {
    type: Number
  },
  roAmount: {
    type: Number
  },
  sku: {
    type: String
  },
  vendor: {
    type: String
  },
  sellerId: {
    type: String
  },
  date: {
    type: Date
  },
  status: {
    type: String
  },
  companyAccount: {
    type: String,
    required: true
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
