// pages/api/users.js
import { getEmail, addUser } from '../../controllers/userController';

export default async function handler(req, res) {
    console.log(req.method);
  if (req.method === 'GET') {
    const users = await getEmail(req, res);
    console.log('Users', users);
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const newUser = await addUser(req, res);
    res.status(201).json(newUser);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
