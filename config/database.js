

const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Db connection Success");
  })
    .catch((err) => {
      console.log(err);
      console.log("Db connection failed");
      process.exit(1);

    })
};

module.exports = dbConnect;