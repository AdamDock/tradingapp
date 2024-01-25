const Subscriber = require('../models/subscriber');

module.exports.createSubscriber = async (req, res) => {
    try {
        const existingSubscriber = await Subscriber.findOne({ email: req.body.email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const subscriber = new Subscriber({
            email: req.body.email
        });
        await subscriber.save();
        res.status(200).json({ message: 'Subscriber created successfully' });
    } catch (error) {
        console.error('Error creating subscriber:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports.getSubscriberCount = async (req, res) => {  
    try {
        const count = await Subscriber.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error('Error getting subscriber count:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

