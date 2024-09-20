const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 9999;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy route for JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple check for demo purposes
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(403).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
