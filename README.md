![node](https://img.shields.io/node/v/recursive-dir-reader)
![npm](https://img.shields.io/npm/v/recursive-dir-reader)
![npm](https://img.shields.io/npm/dt/recursive-dir-reader)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/KiiDii/recursive-dir-reader)
![GitHub last commit](https://img.shields.io/github/last-commit/KiiDii/recursive-dir-reader)
![Discord](https://img.shields.io/discord/219557939466338304?label=Discord%20chat)

##### The module is required for sync or async reading of dir and subdirs.

## Installation
```
npm i recursive-dir-reader
```
After install, you can require module:
```javascript
const readdir = require('recursive-dir-reader');

// Code
```

## Usage
For example, we have the following directory structure:

![alt text](https://cdn.discordapp.com/attachments/413313254354583557/605248635336261666/32fcb07c1a251e78.PNG)

In the code below, we gave several examples of how to read this directory and all its subdirectories.
```javascript
const readdir = require('recursive-dir-reader');

// EX 1
readdir.sync('./someDir', path => {
  console.info(path);
});
// ./someDir/someFile1.js
// ./someDir/someFile2.js
// ./someDir/someSubDir/folderWithOneFile/template.html
// ./someDir/someSubDir/someModule1.js
// ./someDir/someSubDir/someModule2.js


// EX 2
readdir.async('./someDir', path => {
  console.info(path);
});
// ./someDir/someFile1.js
// ./someDir/someFile2.js
// ./someDir/someSubDir/someModule1.js
// ./someDir/someSubDir/someModule2.js
// ./someDir/someSubDir/folderWithOneFile/template.html

// EX 3
const filesIntoDirSync = readdir.sync('./someDir');

console.info(filesIntoDirSync);
// [
//   './someDir/someFile1.js',
//   './someDir/someFile2.js',
//   './someDir/someSubDir/folderWithOneFile/template.html',
//   './someDir/someSubDir/someModule1.js',
//   './someDir/someSubDir/someModule2.js'
// ]

// EX 4
const filesIntoDirAsync = readdir.async('./someDir');

setTimeout(() => {
  console.info(filesIntoDirAsync);
}, 1000);
// [
//   './someDir/someFile1.js',
//   './someDir/someFile2.js',
//   './someDir/someSubDir/someModule1.js',
//   './someDir/someSubDir/someModule2.js',
//   './someDir/someSubDir/folderWithOneFile/template.html'
// ]
```
You can easily combine this methods.
```javascript
const filesIntoDirAsync = readdir.async('./someDir', path => {
  console.info(path);
});
// ./someDir/someFile1.js
// ./someDir/someFile2.js
// ./someDir/someSubDir/someModule1.js
// ./someDir/someSubDir/someModule2.js
// ./someDir/someSubDir/folderWithOneFile/template.html

setTimeout(() => {
  console.info(filesIntoDirAsync);
}, 1000);
// [
//   './someDir/someFile1.js',
//   './someDir/someFile2.js',
//   './someDir/someSubDir/someModule1.js',
//   './someDir/someSubDir/someModule2.js',
//   './someDir/someSubDir/folderWithOneFile/template.html'
// ]
```