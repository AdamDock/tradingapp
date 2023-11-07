// server.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import your User model
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

router.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;

app.prepare().then(() => {
  const server = express();

  // Define your Express.js routes and middleware here
  server.get('/custom-route', (req, res) => {
    return app.render(req, res, '/page-name', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
