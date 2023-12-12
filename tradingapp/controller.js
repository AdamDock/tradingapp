const User = require('./models/user.js');
module.exports = {
    getEmail: async (req, res)=> {
        try {
            //const users = await User.findAll();
            res.status(200).send("users");
          } catch (error) {
            res.status(500);
          } 
    },
    addUser: async (req, res)=>{
        try {
            const user = await User.create(userData);
            return user;
          } catch (error) {
            throw new Error('User creation failed');
          } 
    }
}
