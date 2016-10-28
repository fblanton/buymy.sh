const MongoClient = require('mongodb');
const createApp = require('./create-app');

const PORT = process.env.PORT || 1337;
const LOCAL_MONGO_URI = 'mongodb://localhost:27017/shops-app'
const MONGO_URI = process.env.MONGODB_URI || LOCAL_MONGO_URI

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  }

  createApp(db)
    .listen(PORT);
})
