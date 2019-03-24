const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;