const createApp = require('./create-app');
const PORT = process.env.PORT || 1337;

createApp()
  .listen(PORT);
