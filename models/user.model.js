const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID : {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  }
});

const User = mongoose.model('user', userSchema);
module.exports = User;