#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function dockerExecute() {
  try {
    const { stdout } = await exec(`docker ps | grep selenium | awk '{print $1}'`);

    if (stdout) {
      console.log('Selenium is already running');
    } else {
      await exec('docker run -d -p 4444:4444 vvoyer/selenium-standalone');
      console.log('Selenium Started');
    }
  } catch(e) {
    console.log('Error initializing docker');
    process.exit(1)
  }
}

dockerExecute();