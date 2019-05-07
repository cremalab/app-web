require('ts-node').register({
  project: 'tsconfig.wdio.json'
});

module.exports = require("./wdio.conf.ts")
