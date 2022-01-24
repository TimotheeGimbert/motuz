1) At the root, create index.html and a directory /src containing index.js (/src/style, /src/assets, /src/assets/images, /src/assets/fonts, etc ...)

2) Inside index.html, place : 
<link rel="stylesheet" href="./dist/bundle.css" /> <!-- In <head> --> 
<script src="./dist/bundle.js"></script> <!-- Bottom of <body> --> 

3) Generate package.json with : 
npm init -y

4) Ignore node_modules directory with .gitignore containing the line :  
node_modules/

5) Install webpack and its CLI for development (devDependencies) with : 
npm i --save-dev webpack webpack-cli

6) At the root, create webpack.config.js containing :
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  mode: 'development',
};
