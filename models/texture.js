const mongoose = require('mongoose');

const textureSchema = new mongoose.Schema(
  {
    name: String,
    data: Buffer,
    contentType: String,
  },
);

module.exports = mongoose.model('texture', textureSchema);
