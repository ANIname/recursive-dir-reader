<div align="center">
  <p>
    <img src="https://img.shields.io/node/v/recursive-dir-reader" alt="Node version required">
    <img src="https://img.shields.io/github/languages/code-size/KiiDii/recursive-dir-reader" alt="GitHub code size">
    <img src="https://img.shields.io/npm/dt/recursive-dir-reader" alt="Downloads">
    <a href="https://discord.gg/ADFYZtJ">
      <img src="https://img.shields.io/discord/219557939466338304?label=Discord%20chat%20(rus)" alt="Discord server">
    </a>
  </p>
  <p>
    <a href="https://nodei.co/npm/recursive-dir-reader/">
      <img src="https://nodei.co/npm/recursive-dir-reader.png?compact=true">
    </a>
  </p>
</div>

## About
The module will allow you to **sync** or **async** get all the paths to the files inside the directory and all its sub-directories.

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

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord server](https://discord.gg/ADFYZtJ).

Although the server was created for Russian speakers, you can also write in English! We will understand you!