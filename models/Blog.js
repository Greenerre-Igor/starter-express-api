const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    unique: true
  },
  
});

module.exports = mongoose.model('blog', BlogSchema);