const mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  date: {type: Date, require: true},
  title: {type: String, require: true},
  image: {type: String, require: true},
  description: {type: String, require: true},
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('Article', articleSchema)