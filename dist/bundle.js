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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar app = function app() {\n  var wordToFind;\n  var maxAttempts;\n  var round = 0;\n\n  var prepareGame = function prepareGame() {\n    var generateWord = function generateWord() {\n      return 'nolwenn'.toUpperCase();\n    };\n\n    var buildBoard = function buildBoard(nbLetters) {\n      var board = document.querySelector('.board');\n\n      _toConsumableArray(Array(maxAttempts)).map(function () {\n        return board.innerHTML += \"<div class=\\\"line\\\"></div>\";\n      });\n\n      var lines = _toConsumableArray(document.querySelectorAll('.line'));\n\n      lines.map(function (line) {\n        _toConsumableArray(Array(nbLetters)).map(function () {\n          return line.innerHTML += \"<div class=\\\"box\\\"></div>\";\n        });\n      });\n    };\n\n    wordToFind = generateWord(); // calls API to get a random word to find\n\n    maxAttempts = wordToFind.length - 1; // calculates the total possible attempts depending on the length of the word to find\n\n    buildBoard(wordToFind.length); // build the adequate numbers of rows and boxes for the board\n  };\n\n  var game = function game() {\n    var attempt = function attempt(guess) {\n      var displayAnswer = function displayAnswer() {\n        var boxes = document.querySelectorAll('.line')[round].childNodes;\n        boxes.forEach(function (box, i) {\n          box.innerHTML = wordToFind[i];\n          if (!box.classList.contains('placed')) box.classList.add('wrong');\n        });\n      };\n\n      var displayGuess = function displayGuess() {\n        var boxes = document.querySelectorAll('.line')[round].childNodes;\n        boxes.forEach(function (box, i) {\n          if (guess[i] === wordToFind[i]) {\n            box.innerHTML = wordToFind[i];\n            box.classList.add('placed');\n          } else if (box.classList.contains('placed')) {\n            box.innerHTML = guess[i];\n            box.classList.remove('placed');\n          } else box.innerHTML = guess[i];\n        });\n      };\n\n      var prepareNextLine = function prepareNextLine() {\n        var boxes = document.querySelectorAll('.line')[round].childNodes;\n        var nextBoxes = document.querySelectorAll('.line')[round + 1].childNodes;\n        boxes.forEach(function (box, i) {\n          if (guess[i] === wordToFind[i]) {\n            nextBoxes[i].innerHTML = wordToFind[i];\n            nextBoxes[i].classList.add('placed');\n          }\n        });\n      };\n\n      if (guess === wordToFind) {\n        console.log('winner');\n        return;\n      } else if (round === maxAttempts - 1) {\n        console.log('looser');\n        displayAnswer();\n        return;\n      } else {\n        prepareNextLine();\n        displayGuess();\n        round++;\n      }\n    };\n\n    var handleInput = function handleInput() {\n      var verifyInput = function verifyInput(input) {\n        var regex = /^([a-z]){7}$/i;\n        return regex.test(input) ? true : false;\n      };\n\n      var input = document.querySelector('input').value;\n      verifyInput(input) ? attempt(input.toUpperCase()) : console.log('wrong');\n    };\n\n    if (round < maxAttempts) {\n      var proposeButton = document.getElementsByTagName('button')[0];\n      proposeButton.addEventListener('click', function () {\n        return handleInput();\n      });\n    } else return;\n  };\n\n  prepareGame();\n  game();\n};\n\napp();\n\n//# sourceURL=webpack://motuz/./src/js/index.js?");

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