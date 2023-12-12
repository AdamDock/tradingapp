import User from '../models/user';

module.exports = {
    getEmail: async (req, res) => {
        try {
            const users = await User.findAll();
            console.log('Users in Controller:', users);

            if (!users || users.length === 0) {
                // Log a message if no users are found
                console.log('No users found.');
            }

            res.status(200).send(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    addUser: async (req, res) => {
        try {
            // Assuming userData is defined somewhere before using it
            const userData = req.body;

            const user = await User.create(userData);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('User creation failed');
        }
    }
};
getEmail();