var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: process.env.MONGO_URL,
  appId: process.env.APP_ID,
  masterKey: process.env.APP_SECRET,
  serverURL: process.env.APP_URL
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

const port = process.env.PORT || 8001;
app.listen(port, function() {
  console.log(`parse-server-example running on port ${port}.`);
});
