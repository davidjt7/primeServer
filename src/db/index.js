const mongoose = require('mongoose');

const connectToDB = () =>
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = {
  connectToDB,
};
