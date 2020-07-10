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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor (htmlElements) {\n        this.htmlElements = htmlElements;\n\n    }\n\n    html(string) {\n        if (string === undefined) {\n            return this.htmlElements[0].innerHTML;\n        } else {\n            this.htmlElements = this.htmlElements.map(function(ele) {\n               return ele.innerHTML = string;\n            });\n            return this;\n        }\n    }\n\n    empty() {\n       return this.html(\"\");\n    }\n\n    append(arg) {\n    \n        if (arg instanceof DOMNodeCollection) {\n            this.htmlElements.forEach(function(ele) {\n                arg.htmlElements.forEach(function (argEle) {\n                    ele.innerHTML = ele.innerHTML.concat(argEle.outerHTML);\n                    //debugger;\n                    //return combined;\n                });  \n            });\n        } else {\n            this.htmlElements = this.htmlElements.map(function(ele) {\n                return ele.innerHTML += arg;\n            });\n        }\n        return this;\n    }\n\n    attr(name, val) {\n        if (val === undefined) {\n            return this.htmlElements[0].getAttribute(name);\n        } else {\n            this.htmlElements = this.htmlElements.map(function(ele) {\n                ele.setAttribute(name, val)\n                return ele; \n            });\n            return this;\n        }\n    }\n\n    addClass(htmlClass) {\n        this.htmlElements = this.htmlElements.map(function(ele) {\n            ele.setAttribute(\"class\", htmlClass)\n            return ele; \n        });\n        return this;\n    }\n\n    removeClass(htmlClass) {\n        this.htmlElements = this.htmlElements.map(function(ele) {\n            if (ele.getAttribute(\"class\") === htmlClass) {\n                ele.removeAttribute(\"class\", htmlClass)\n            }\n            return ele; \n        });\n        return this;\n    }\n\n    children() {\n        let childrenArray = []\n        this.htmlElements.forEach(function(ele) {\n            //debugger;\n            htmlCollection = ele.children;\n            thisEleChildren = Array.from(htmlCollection);\n            childrenArray.concat(thisEleChildren);\n            //debugger;\n        });\n        return new DOMNodeCollection(childrenArray);\n    }\n\n//http://127.0.0.1:5500/index.html\n\n//https://www.w3schools.com/jquery/html_removeclass.asp\n\n// https://www.w3schools.com/jsref/met_element_setattribute.asp\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\nfunction $l(...arg) {\n\n    try {\n        htmlElements = document.querySelectorAll(arg[0]);\n        argArray = Array.from(htmlElements);\n    }\n      catch(err) {\n        argArray = arg;\n    }\n    return new DOMNodeCollection(argArray);\n    \n}   \n\n\n\n\nwindow.$l = $l;\nwindow.addEventListener('load', (event) => {\n    console.log('page is fully loaded');\n    const $li = $l('li');\n    const $jli = $('li');\n    const $ul = $l('ul');\n\n    console.log($ul.children());\n\n    //console.log($jli.attr(\"country\",\"USA\"));\n\n    //console.log($li.append(\"<marquee>Fantastic</marquee>\"));\n\n    //console.log($ul.htmlElements[0].innerHTML);\n    // console.log($li.htmlElements[1]);\n    // console.log($li.htmlElements[2]);\n    // console.log($li.htmlElements[3]);\n\n    //const $jul = $('ul').html();\n    //console.log($jul);\n\n    //const vanillaUL = document.getElementsByTagName(\"UL\")[0];\n    //console.log(vanillaUL.innerHTML);\n\n    //console.log($ul.html());\n\n    //-----------------------------------------\n    //console.log($jli.empty());\n    //console.log($li.empty());\n\n\n\n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });