const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: String,
  base: String,
  quantity: Number
}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);