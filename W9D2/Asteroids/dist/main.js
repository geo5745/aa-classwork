/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(pos) {\n    let radius = 20;\n    let color = \"gray\";\n    let vel = Util.randomVec(2);\n    MovingObject.call(this, pos, vel, radius, color);\n\n\n}\n\nmodule.exports = Asteroid;\n\n// function Dog (name, coatColor) {\n//     // call super-constructor function on **the current `Dog` instance**.\n//     Animal.call(this, name);\n  \n//     // `Dog`-specific initialization\n//     this.coatColor = coatColor;\n//   }\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game () {\n\n    this.DIM_X = 500;\n    this.DIM_Y = 500;\n    this.NUM_ASTEROIDS = 15;\n    this.asteroids = [];\n    \n    this.addAsteroids();\n\n}\n\nGame.prototype.randomPosition = function () {\n    let x = Math.random() * this.DIM_X;\n    let y = Math.random() * this.DIM_Y;\n    return [x,y];\n}\n\nGame.prototype.addAsteroids = function () {\n    while (this.asteroids.length < this.NUM_ASTEROIDS) {\n        let pos = this.randomPosition();\n        this.asteroids.push(new Asteroid(pos));\n    }\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, 500, 500);\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 500, 500);\n    this.asteroids.forEach(function(ast) {\n        ast.draw.call(ast, ctx);      \n    });\n}\n\nGame.prototype.moveObjects = function() {\n    this.asteroids.forEach(function(ast) {\n        ast.move.call(ast);      \n    });\n}\n\nGame.prototype.wrap = function(pos) {\n    function adjustPosition(pos) {\n        let newpos = pos;\n        if (pos[0] > 520) newpos[0] = pos[0] - 520;\n        if (pos[0] < -20) newpos[0] = pos[0] + 520;\n        if (pos[1] > 520) newpos[1] = pos[1] - 520;\n        if (pos[1] < -20) newpos[1] = pos[1] + 520;\n        return newpos;\n    }\n    this.asteroids.forEach(function(ast) {\n        //ast.move.call(ast); \n        ast.pos = adjustPosition(ast.pos);     \n    });\n}\n\n// int max = 50;\n// int min = 1;\n// // 1. Using Math.random()\n// double random = Math.random() * 49 + 1;\n// or\n// int random = (int)(Math.random() * 50 + 1);\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game,ctx) {\n\n    this.game = game;\n    this.ctx = ctx;\n\n}\n\nGameView.prototype.start = function (ctx) {\n    function nextFrame() {\n        this.game.draw(ctx);\n        this.game.moveObjects();\n        this.game.wrap();\n        // console.log(\"Test\");\n    }\n    // nextFrame();\n    //console.log(\"timeout 1\");\n    //setTimeout(nextFrame(),5000);\n    //console.log(\"timeout 2\");\n    //setTimeout(nextFrame(),5000);\n    //console.log(\"timeout 3\");\n    //setTimeout(nextFrame(),5000);\n    setInterval(function () { nextFrame(); }, 20);\n\n\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.Util = Util;\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game; \nwindow.GameView = GameView; \n\nUtil.inherits(Asteroid, MovingObject);\n\nconst mo = new MovingObject([30, 30],[10, 10],5,\"#00FF00\");\nconst mo2 = new MovingObject([30, 30], [10, 10], 5, \"red\");\nconst ast = new Asteroid([100,100]);\nconst game = new Game();\n\n\nwindow.mo = mo;\nconsole.log(mo);\nconsole.log(mo.pos);\nwindow.ast = ast;\nwindow.game = game;\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvasEl = document.getElementById('canvas'); // need to grab element from DOM\n    canvasEl.height = 500;\n    canvasEl.width = 500;\n    const ctx = canvasEl.getContext('2d'); // need to get ctx from canvasEl\n\n    // draw black rectangle that takes up entire canvasEl\n    ctx.fillRect(0, 0, 500, 500);\n    \n    const gameview = new GameView(game,ctx);\n\n    gameview.start(ctx);\n\n\n    // function drawFrame() {\n    //     mo.move(ctx);\n    //     mo2.draw(ctx);\n    //     ast.draw(ctx);\n    //     game.draw(ctx);\n    //     mo.draw(ctx);\n    // }\n    // setInterval(drawFrame(),1000);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n\n// moving_object.js\nfunction MovingObject(pos,vel,radius,color) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;    \n  }\n\n  MovingObject.prototype.draw = function(ctx) {\n      let pos = this.pos;\n      let radius = this.radius;\n      let color = this.color;\n\n      ctx.beginPath();\n      ctx.arc(pos[0], pos[1],radius, 0, 2 * Math.PI);\n      ctx.fillStyle = color;\n      ctx.fill();\n  }\n\n  MovingObject.prototype.move = function(ctx) {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n\n\n  \nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n      // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n  \n};\n\nmodule.exports = Util;\n\n\n// class Cat {\n//     constructor(name) {\n//         this.name = name;\n//     }\n\n//     speak() {\n//         console.log(`${this.name} makes a noise.`);\n//     }\n// }\n// class Lion extends Cat {\n//     speak() {\n//         super.speak();\n//         console.log(`${this.name} roars.`);\n//     }\n// }\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });