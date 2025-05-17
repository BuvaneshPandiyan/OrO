require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  address: String,
  phone: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error creating user' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
