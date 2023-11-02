/*
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer')
const Vonage = require('@vonage/server-sdk');
const cors = require('cors');
const app = express();
const { getEvents, updateUsers, addSubscriber } = require('./controller.js');
const {SERVER_PORT} = process.env


//Middleware

app.use(express.json());
app.use(cors());

//RESTful requests
app.get('/events', get data);
app.post('/users', updateUsers);
app.post('/email', addSubscriber);

app.listen(SERVER_PORT, () => {
    console.log(`Docked at server ${SERVER_PORT}`)
});
*/
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

app.prepare().then(() => {
  const server = express();

  // Define your Express routes here
  server.get('/custom-route', (req, res) => {
    res.send('This is a custom route handled by Express');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
});
