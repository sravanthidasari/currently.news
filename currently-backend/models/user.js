const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  loginId: {type: String, require: true},
  name: {type: String, require: true}
});

module.exports = mongoose.model('User', userSchema)