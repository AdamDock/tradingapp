const express = require('express');
const next = require('next');
const cors = require('cors');
const {getEmail, addUser} = require('./controller.js');
const User = require('./models/user.js');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cors());
  console.log("here")
  server.get('/pages/insider',(req, res)=> {
        res.send("usersautistic");
  })
  server.post('/addauser',addUser);

  server.get('/api/someEndpoint', (req, res) => {
    // Handle your Express route logic
    res.json({ message: 'Hello from Express' });
  });

  // Handle all other requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);0.
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
