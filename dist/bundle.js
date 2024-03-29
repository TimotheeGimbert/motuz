/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar main = function main() {\n  var words = ['potirons', 'unitaire', 'diverger', 'desordre', 'arthrose', 'sourdine', 'courants', 'baignade', 'dauphins', 'bacterie', 'bannette', 'brodeurs', 'bretelle', 'nautisme', 'narcisse', 'nouveaux', 'rajuster', 'rallonge', 'remorque', 'usinages', 'usuriere', 'zodiaque', 'emmarger', 'gendarme', 'galopade', 'immature', 'inconnus', 'sentiers', 'sensitif'];\n  var status;\n\n  var game = function game() {\n    var wordToFind;\n    var maxAttempts;\n    var lettersFound;\n    var round;\n\n    var initialize = function initialize() {\n      var generateWord = function generateWord() {\n        var randomIndex = Math.floor(Math.random() * words.length);\n        return words[randomIndex].toUpperCase();\n      };\n\n      var displayFirstLetter = function displayFirstLetter() {\n        var firstBox = document.querySelectorAll('.line')[0].childNodes[0];\n        firstBox.innerHTML = lettersFound[0];\n        firstBox.classList.add('placed');\n      };\n\n      var buildBoard = function buildBoard(nbLetters) {\n        var board = document.querySelector('.board');\n        board.innerHTML = '';\n\n        _toConsumableArray(Array(maxAttempts)).map(function () {\n          return board.innerHTML += \"<div class=\\\"line\\\"></div>\";\n        });\n\n        var lines = _toConsumableArray(document.querySelectorAll('.line'));\n\n        lines.map(function (line) {\n          _toConsumableArray(Array(nbLetters)).map(function () {\n            return line.innerHTML += \"<div class=\\\"box\\\"></div>\";\n          });\n        });\n      };\n\n      document.getElementsByClassName('input')[0].classList.remove('wrongInput');\n      document.getElementById('submitButton').style.display = 'flex';\n      document.getElementsByTagName('input')[0].value = '';\n      wordToFind = generateWord();\n      maxAttempts = wordToFind.length - 1;\n      lettersFound = _toConsumableArray(Array(wordToFind.length));\n      round = 0;\n      status = 'playing';\n      buildBoard(wordToFind.length);\n      lettersFound[0] = wordToFind[0];\n      displayFirstLetter();\n    };\n\n    var handleInput = function handleInput() {\n      var verifyInput = function verifyInput(input) {\n        var regexpString = \"(^([a-z]){\".concat(wordToFind.length, \"}$)\");\n        var regex = new RegExp(regexpString, 'i');\n        return regex.test(input) ? true : false;\n      };\n\n      var colorInput = function colorInput() {\n        var inputDiv = document.getElementsByClassName('input')[0];\n        inputDiv.classList.add('wrongInput');\n      };\n\n      var input = document.querySelector('input').value;\n      verifyInput(input) ? attempt(input.toUpperCase()) : colorInput();\n    };\n\n    var attempt = function attempt(guess) {\n      var displayGuess = function displayGuess() {\n        var boxes = document.querySelectorAll('.line')[round].childNodes;\n        boxes.forEach(function (box, i) {\n          box.innerHTML = guess[i];\n\n          if (guess[i] === wordToFind[i]) {\n            box.classList.add('placed');\n            lettersFound[i] = wordToFind[i];\n          } else if (box.classList.contains('placed')) {\n            box.classList.remove('placed');\n            box.classList.add('wrong');\n          }\n        });\n      };\n\n      var prepareNextRound = function prepareNextRound() {\n        var colorizeCurrentMisplaced = function colorizeCurrentMisplaced() {\n          var boxes = document.querySelectorAll('.line')[round].childNodes;\n          boxes.forEach(function (box, i) {\n            if (box.classList.contains('placed')) return;else if (wordToFind.includes(guess[i])) {\n              var neededOccurences = wordToFind.split('').filter(function (e) {\n                return e === guess[i];\n              }).length;\n              var wellPlacedOccurences = lettersFound.filter(function (e) {\n                return e === guess[i];\n              }).length;\n              var misplacedColorizedOccurences = 0;\n              boxes.forEach(function (box) {\n                if (box.innerHTML === guess[i] && box.classList.contains('misplaced')) misplacedColorizedOccurences++;\n              });\n              var occurencesToColorize = neededOccurences - wellPlacedOccurences - misplacedColorizedOccurences;\n\n              if (occurencesToColorize > 0) {\n                box.classList.add('misplaced');\n              }\n            }\n          });\n        };\n\n        var displayNextLine = function displayNextLine() {\n          var nextBoxes = document.querySelectorAll('.line')[round + 1].childNodes;\n          nextBoxes.forEach(function (box, i) {\n            if (lettersFound[i] != undefined) {\n              box.innerHTML = wordToFind[i];\n              box.classList.add('placed');\n            }\n          });\n        };\n\n        colorizeCurrentMisplaced();\n        displayNextLine();\n        document.getElementsByTagName('input')[0].value = '';\n      };\n\n      var showAnswer = function showAnswer() {\n        var boxes = document.querySelectorAll('.line')[round].childNodes;\n        boxes.forEach(function (box, i) {\n          box.innerHTML = wordToFind[i];\n          if (!box.classList.contains('placed')) box.classList.add('wrong');\n        });\n      };\n\n      var inputDiv = document.getElementsByClassName('input')[0];\n      inputDiv.classList.remove('wrongInput');\n\n      if (guess === wordToFind) {\n        status = 'winner';\n        displayGuess();\n        return;\n      } else if (round === maxAttempts - 1) {\n        status = 'looser';\n        showAnswer();\n        return;\n      } else {\n        displayGuess();\n        prepareNextRound();\n        round++;\n      }\n    };\n\n    initialize();\n    document.getElementById('submitButton').addEventListener('click', handleInput);\n    document.getElementById('replayButton').addEventListener('click', initialize);\n  };\n\n  game();\n};\n\nmain();\n\n//# sourceURL=webpack://motuz/./src/js/index.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://motuz/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;