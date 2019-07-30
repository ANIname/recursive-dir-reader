'use strict';

const {each} = require('async');
const {promisify} = require('util');
const fs = require('fs');

/**
 * Asynchronous Get All Files In Directory & Subdirectories
 * @param {string} dir - A path to a directory
 * @param {function|undefined} callback - Calls the function one time for each item in the folder.
 */
function async(dir, callback = undefined) {
  if (callback && typeof callback !== 'function') {
    throw new Error('Expected callback function');
  }

  const paths = [];

  try {
    startReading(dir, callback);
  } catch (error) {
    throw console.error(error);
  }

  return paths;

  async function startReading(dir, callback) {
    const items = await promisify(fs.readdir)(dir);

    each(items, async itemName => {
      const path = `${dir}/${itemName}`;

      const stat = await promisify(fs.stat)(path);

      if (stat.isDirectory()) return startReading(path, callback);

      if (callback) callback(path);

      paths.push(path);
    });
  }
}

/**
 * Synchronous Get All Files In Directory & Subdirectories
 * @param {string} dir - A path to a directory
 * @param {function|undefined} callback - Calls the function one time for each item in the folder.
 */
function sync(dir, callback = undefined) {
  if (callback && typeof callback !== 'function') {
    throw new Error('Expected callback function');
  }

  const paths = [];

  try {
    startReading(dir, callback);
  } catch (err) {
    throw console.error(err);
  }

  return paths;

  function startReading(dir, callback) {
    const items = fs.readdirSync(dir);

    each(items, itemName => {
      const path = `${dir}/${itemName}`;
      const isDirectory = fs.statSync(path).isDirectory();

      if (isDirectory) startReading(path, callback);

      else {
        if (callback) callback(path);

        paths.push(path);
      }
    });
  }
}

module.exports = {async, sync};
