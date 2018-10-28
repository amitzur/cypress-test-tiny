// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const express = require('express');
const psetTimeout = require('util').promisify(setTimeout);
const app = express();

// long waiting route
app.get('/bla', async (req, res) => {
  await psetTimeout(180000);
  res.sendStatus(200);
});

const startServer = () => new Promise((resolve, reject) => {
  const server = app.listen(7373, err => {
    if (err) reject(err);
    else resolve();
  });

  // very long node server timeout (to show OS doesn't time out)
  server.timeout = 3600000;
})

module.exports = async (on, config) => {
  await startServer();
}
