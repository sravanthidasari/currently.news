const mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
  comment: {type: String, require: true}
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


module.exports = mongoose.model('Comments', commentsSchema)