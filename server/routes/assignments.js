const express = require('express');
const router = express.Router();
const Asset = require('../model/asset');
const checkRole = require('../middleware/auth');

// Logistics + Admin
router.post('/', checkRole(['Admin', 'Logistics']), async (req, res) => {
  const { name, base, quantity } = req.body;

  const asset = await Asset.findOne({ name, base });

  if (!asset || asset.quantity < quantity) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  asset.quantity -= quantity;
  await asset.save();

  res.json({ message: "Assignment successful" });
});

module.exports = router;