const mongoose = require('mongoose');

var likeSchema = mongoose.Schema({
  name: {type: String},
  likes: [{type: Schema.ObjectId, ref: 'Likes'}],
  dislikes: [{type: Schema.ObjectId, ref: 'Dilikes'}],
  value: {type: Boolean}
});

module.exports = mongoose.model('Likes', likesSchema)