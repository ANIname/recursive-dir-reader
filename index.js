'use strict';

const {each} = require('async');
const fs = require('fs');

/**
 * Asynchronous Get All Files In Directory & Subdirectories
 * @param {string} dir - A path to a directory
 * @param {function|undefined} callback - Calls the function one time for each item in the folder.
 */
function async(dir, callback = undefined) {
  const paths = [];

  startReading(dir, callback);

  function startReading(dir, callback) {
    fs.readdir(dir, (err, items) => {
      if (err) throw console.error(err);

      each(items, itemName => {
        const path = `${dir}/${itemName}`;

        fs.stat(path, (err, stat) => {
          if (err) throw console.error(err);

          if (stat.isDirectory()) startReading(path, callback);

          else {
            if (callback) callback(path);

            paths.push(path);
          }
        });
      });
    });
  }

  return paths;
}

/**
 * Synchronous Get All Files In Directory & Subdirectories
 * @param {string} dir - A path to a directory
 * @param {function|undefined} callback - Calls the function one time for each item in the folder.
 */
function sync(dir, callback = undefined) {
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
