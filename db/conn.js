const mongoose = require('mongoose');
const DB = process.env.DATABASE;
console.log('db', DB);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connection successfull');
  })
  .catch((err) => {
    console.log(err);
  });
