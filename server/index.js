
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cors(
    {
  origin: "*"
}
));
app.use(express.json());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  app.post('/api/users', async (req, res) => {
  const User = require('./model/user');
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

const purchaseRoutes = require('./routes/purchases');
const transferRoutes = require('./routes/transfer');
const assignmentRoutes = require('./routes/assignments');

app.use('/api/purchases', purchaseRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/assignments', assignmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});