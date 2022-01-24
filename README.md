This README is not correctly readable as displayed on github >>> open it locally

1) At the root, create index.html and a directory /src containing index.js (/src/style, /src/assets, /src/assets/images, /src/assets/fonts, etc ...)

2) Inside index.html, place : 
<!-- In <head> -->            <link rel="stylesheet" href="./dist/bundle.css" /> 
<!-- Bottom of <body> -->     <script src="./dist/bundle.js"></script>  

3) Generate package.json with : 
npm init -y

4) Ignore node_modules directory with .gitignore containing the line :  
node_modules/

5) Install webpack and its CLI for development (devDependencies) to generate node_modules : 
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

7) In package.json, add a script that launch webpack with our config file 
"scripts": {
    "build": "webpack --config webpack.config.js",
  },

8) In package.json, removes line "main": "index.js"

9) Adds module rules, in webpackconfig below output
module: {
    rules: [
      
    ],
  },

10) Install Babel : 
npm i -D babel-loader @babel/core @babel/preset-env

11) Adds rules for Babel:
rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],