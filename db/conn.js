const mongoose = require('mongoose');
const DB = process.env.DATABASE;
console.log('db', DB);

// mongodb+srv://msdesai32:KIjoghZeU06aHhdH@cluster0.z9brwtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
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
