const mongoose = require('mongoose');

const MongoDB_URI = 'mongodb://localhost:27017/trading1';

mongoose.connect(MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

process.on('SIGINT', function() {
    db.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose; // Exporting the mongoose connection