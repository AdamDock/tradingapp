const mongoose = require('../db/connect');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});
let Subscriber;
if (mongoose.models.Subscriber) {
    Subscriber = mongoose.model('Subscriber');
} else {
    Subscriber = mongoose.model('Subscriber', subscriberSchema);
}

module.exports = Subscriber; // Exporting the Subscriber model
  