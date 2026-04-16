const express = require('express');
const router = express.Router();
const Asset = require('../model/asset');
const checkRole = require('../middleware/auth');

// Admin + Commander allowed
router.post('/', checkRole(['Admin', 'Commander']), async (req, res) => {
  let { name, fromBase, toBase, quantity } = req.body;

name = name.trim();
fromBase = fromBase.trim();
toBase = toBase.trim();
quantity = Number(quantity);

const fromAsset = await Asset.findOne({ name, base: fromBase });

if (!fromAsset) {
  return res.status(400).json({ message: "Asset not found" });
}

if (fromAsset.quantity < quantity) {
  return res.status(400).json({ message: "Not enough stock" });
}

  // Deduct
  fromAsset.quantity -= quantity;
  await fromAsset.save();

  // Add to destination
  let toAsset = await Asset.findOne({ name, base: toBase });

  if (toAsset) {
    toAsset.quantity += quantity;
  } else {
    toAsset = new Asset({ name, base: toBase, quantity });
  }

  await toAsset.save();
  console.log("FROM ASSET:", fromAsset);

  res.json({ message: "Transfer successful" });
});

module.exports = router;