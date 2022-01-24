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

12) Create index.scss dans src/style/

13) import this file in src/index.js :
import './style/index.scss';

14) install sass :
npm i -D sass sass-loader postcss-loader css-loader

15) Create rule in webpackconfig 
{
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
      },
    },
  ],
},

16) To use postCSS (in production mode), add a file postcss.config.js at the root containing :
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
    ],
  };
}

17) Install MiniCSSExtract PLUG-IN  (to bundle every css into one)
$ npm i -D mini-css-extract-plugin

18) Import the plug-in in wabpack config : 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

19) Add plug-in after module in webpack config
plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],

20 ) Edit sass scss rules in webpack config to use the plug-in (first row to be used at the end)
{
  loader: MiniCssExtractPlugin.loader,
},

21) Adds rules for images in webpack config
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset/resource',
},

22) Webpack auto compile when changes live : adds a the end of webpack.config
module.exports = {
  //...
  watch: true,
};


23) Install desired NPM modules (example dayjs) with
  npm i moduleName ( -D dev env??? )
24) Then import into .js file with : import moduleName from 'moduleName';

25) Environment variables into package.json, for example into the script 'build', add --env myVar=development
Also, modify webpackconfig to make module.export as a function with attribute env 
module.exports = (env) => {
  console.log("myVar:", env.myVar);
  return {
        previous content of module.exports
  }
}

26) To use a .env file for secret info, install DOTENV :
  npm i -D dotenv-webpack
27) Import DOTENV into webpackconfig at the top :
  const Dotenv = require('dotenv-webpack');
28) Finaly add it into plugins section :
 new Dotenv(),


29) Install bootstrap via npm
  npm install bootstrap
30) import js for boostrap at entry point index.js with : import 'bootstrap';
31) Add peerDependencies for bootstrap, adding them in packacge.json with : npm install --save jquery @popperjs/core (popper.js  instead for old version)
32) Adds to the beginning of main scss file index.scss :
    @import '~bootstrap/scss/bootstrap';
33) Create a file _custom.scss in src to overide scss of bootstrap, and adds before the import bootstrap :
    @import './custom';
