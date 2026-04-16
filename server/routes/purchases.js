const express = require('express');
const router = express.Router();
const Asset = require('../model/asset');
const checkRole = require('../middleware/auth');

// Only Admin can purchase
router.post('/', checkRole(['Admin']), async (req, res) => {
  try {
    let { name, base, quantity } = req.body;
    console.log("BODY:", req.body);

    quantity = Number(quantity);

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    let asset = await Asset.findOne({ name, base });

    if (asset) {
      asset.quantity = Number(asset.quantity) + quantity;
      await asset.save();
    } else {
      asset = new Asset({ name, base, quantity });
      await asset.save();
    }

    res.json(asset);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in purchase" });
  }
});
// GET all assets
router.get('/', async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
});

module.exports = router;