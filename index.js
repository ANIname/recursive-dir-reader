'use strict';

const {each} = require('async');
const fs = require('fs');

/**
 * Asynchronous Get All Files In Directory & Subdirectories
 * @param {string} dir - A path to a directory
 * @param {function|undefined} callback - Calls the function one time for each item in the folder.
 */
function async(dir, callback) {
  const paths = [];

  fs.readdir(dir, (err, items) => {
    if (err) throw console.error(err);

    each(items, itemName => {
      const path = `${dir}/${itemName}`;

      fs.stat(path, (err, stat) => {
        if (err) throw console.error(err);

        if (stat.isDirectory()) async(path, callback);

        else {
          if (callback) callback(path);

          paths.push(path);
        }
      });
    });
  });

  return paths;
}

function sync(dir, callback) {
  try {
    const paths = [];
    const items = fs.readdirSync(dir);

    each(items, itemName => {
      const path = `${dir}/${itemName}`;
      const isDirectory = fs.statSync(path).isDirectory();

      if (isDirectory) sync(path, callback);

      else {
        if (callback) callback(path);

        paths.push(path);
      }
    });

    return paths;
  } catch (err) {
    throw console.error(err);
  }
}

module.exports = {async, sync};
