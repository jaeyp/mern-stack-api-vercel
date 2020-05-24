const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            /* DB connection string: if you don't have it, you need an account and build a cluster https://www.mongodb.com/cloud/atlas */
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;