const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  vName: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  contactPerson: {
    type: String,
  },
  taxId: {
    type: String,
  },
  leadTime: {
    type: Number,
  },
  moq: {
    type: Number,
  },
  companyAccount: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
