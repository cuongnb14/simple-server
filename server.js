'use strict';
var os = require("os");
var hostname = os.hostname();

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});


// App
const app = express();

app.get('/', (req, res) => {
  res.send("v2.0" + hostname + "\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
