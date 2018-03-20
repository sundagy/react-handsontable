(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handsontable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["handsontable", "react"], factory);
	else if(typeof exports === 'object')
		exports["HotTable"] = factory(require("handsontable"), require("react"));
	else
		root["HotTable"] = factory(root["Handsontable"], root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2).default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

var _settingsMapper = __webpack_require__(4);

var _settingsMapper2 = _interopRequireDefault(_settingsMapper);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Handsontable-ReactJS wrapper.
 *
 * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.
 * For example:
 *
 * ```js
 * <HotTable root="hot" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH="all" />
 *
 * // is analogous to
 * let hot = new Handsontable(document.getElementById('hot'), {
 *    data: dataObject,
 *    contextMenu: true,
 *    colHeaders: true,
 *    width: 600
 *    height: 300
 * });
 *
 * ```
 *
 * @class HotTable
 */
var HotTable = function (_React$Component) {
  _inherits(HotTable, _React$Component);

  function HotTable() {
    _classCallCheck(this, HotTable);

    var _this = _possibleConstructorReturn(this, (HotTable.__proto__ || Object.getPrototypeOf(HotTable)).call(this));

    _this.hotInstance = null;
    _this.settingsMapper = new _settingsMapper2.default();
    _this.root = null;
    return _this;
  }

  /**
   * Initialize Handsontable after the component has mounted.
   */


  _createClass(HotTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newSettings = this.settingsMapper.getSettings(this.props);
      this.hotInstance = new _handsontable2.default(document.getElementById(this.root), newSettings);
    }

    /**
     * Call the `updateHot` method and prevent the component from re-rendering the instance.
     *
     * @param {Object} nextProps
     * @param {Object} nextState
     * @returns {Boolean}
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      this.updateHot(this.settingsMapper.getSettings(nextProps));

      return false;
    }

    /**
     * Destroy the Handsontable instance when the parent component unmounts.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hotInstance.destroy();
    }

    /**
     * Render the table.
     *
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      this.root = this.props.root || 'hot' + new Date().getTime();
      return _react2.default.createElement('div', { id: this.root });
    }

    /**
     * Call the `updateSettings` method for the Handsontable instance.
     * @param newSettings
     */

  }, {
    key: 'updateHot',
    value: function updateHot(newSettings) {
      this.hotInstance.updateSettings(newSettings);
    }
  }]);

  return HotTable;
}(_react2.default.Component);

exports.default = HotTable;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsMapper = function () {
  function SettingsMapper() {
    _classCallCheck(this, SettingsMapper);

    this.registeredHooks = _handsontable2.default.hooks.getRegistered();
  }

  /**
   * Parse component settings into Handosntable-compatible settings.
   *
   * @param {Object} properties Object containing properties from the HotTable object.
   * @returns {Object} Handsontable-compatible settings object.
   */


  _createClass(SettingsMapper, [{
    key: 'getSettings',
    value: function getSettings(properties) {
      var newSettings = {};

      if (properties.settings) {
        var settings = properties.settings;
        for (var key in settings) {
          if (settings.hasOwnProperty(key)) {
            newSettings[this.trimHookPrefix(key)] = settings[key];
          }
        }
      }

      for (var _key in properties) {
        if (_key != 'settings' && properties.hasOwnProperty(_key)) {
          newSettings[this.trimHookPrefix(_key)] = properties[_key];
        }
      }

      return newSettings;
    }

    /**
     * Trim the "on" hook prefix.
     *
     * @param {String} prop Settings property.
     * @returns {String} Handsontable-compatible, prefix-less property name.
     */

  }, {
    key: 'trimHookPrefix',
    value: function trimHookPrefix(prop) {
      if (prop.indexOf('on') === 0) {
        var hookName = prop.charAt(2).toLowerCase() + prop.slice(3, prop.length);
        if (this.registeredHooks.indexOf(hookName) > -1) {
          return hookName;
        }
      }

      // returns the string anyway, when we're sure all the hooks are registered, might be changed
      return prop;
    }
  }]);

  return SettingsMapper;
}();

exports.default = SettingsMapper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./handsontable.full.css", function() {
			var newContent = require("!!../../css-loader/index.js!./handsontable.full.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * (The MIT License)\r\n * \r\n * Copyright (c) 2012-2014 Marcin Warpechowski\r\n * Copyright (c) 2015 Handsoncode sp. z o.o. <hello@handsoncode.net>\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining\r\n * a copy of this software and associated documentation files (the\r\n * 'Software'), to deal in the Software without restriction, including\r\n * without limitation the rights to use, copy, modify, merge, publish,\r\n * distribute, sublicense, and/or sell copies of the Software, and to\r\n * permit persons to whom the Software is furnished to do so, subject to\r\n * the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be\r\n * included in all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\r\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\r\n * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\r\n * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\r\n * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\r\n * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n * \r\n * Version: 0.38.0\r\n * Release date: 14/03/2018 (built at 20/03/2018 03:06:00)\r\n */\r\n/**\r\n * Fix for bootstrap styles\r\n */\r\n.handsontable .table th, .handsontable .table td {\r\n  border-top: none;\r\n}\r\n\r\n.handsontable tr {\r\n  background: #fff;\r\n}\r\n\r\n.handsontable td {\r\n  background-color: inherit;\r\n}\r\n\r\n.handsontable .table caption + thead tr:first-child th,\r\n.handsontable .table caption + thead tr:first-child td,\r\n.handsontable .table colgroup + thead tr:first-child th,\r\n.handsontable .table colgroup + thead tr:first-child td,\r\n.handsontable .table thead:first-child tr:first-child th,\r\n.handsontable .table thead:first-child tr:first-child td {\r\n  border-top: 1px solid #CCCCCC;\r\n}\r\n\r\n/* table-bordered */\r\n.handsontable .table-bordered {\r\n  border: 0;\r\n  border-collapse: separate;\r\n}\r\n\r\n.handsontable .table-bordered th,\r\n.handsontable .table-bordered td {\r\n  border-left: none;\r\n}\r\n\r\n.handsontable .table-bordered th:first-child,\r\n.handsontable .table-bordered td:first-child {\r\n  border-left: 1px solid #CCCCCC;\r\n}\r\n\r\n.handsontable .table > tbody > tr > td,\r\n.handsontable .table > tbody > tr > th,\r\n.handsontable .table > tfoot > tr > td,\r\n.handsontable .table > tfoot > tr > th,\r\n.handsontable .table > thead > tr > td,\r\n.handsontable .table > thead > tr > th {\r\n  line-height: 21px;\r\n  padding: 0 4px;\r\n}\r\n\r\n.col-lg-1.handsontable, .col-lg-10.handsontable, .col-lg-11.handsontable, .col-lg-12.handsontable,\r\n.col-lg-2.handsontable, .col-lg-3.handsontable, .col-lg-4.handsontable, .col-lg-5.handsontable, .col-lg-6.handsontable, .col-lg-7.handsontable, .col-lg-8.handsontable, .col-lg-9.handsontable,\r\n.col-md-1.handsontable, .col-md-10.handsontable, .col-md-11.handsontable, .col-md-12.handsontable,\r\n.col-md-2.handsontable, .col-md-3.handsontable, .col-md-4.handsontable, .col-md-5.handsontable, .col-md-6.handsontable, .col-md-7.handsontable, .col-md-8.handsontable, .col-md-9.handsontable\r\n.col-sm-1.handsontable, .col-sm-10.handsontable, .col-sm-11.handsontable, .col-sm-12.handsontable,\r\n.col-sm-2.handsontable, .col-sm-3.handsontable, .col-sm-4.handsontable, .col-sm-5.handsontable, .col-sm-6.handsontable, .col-sm-7.handsontable, .col-sm-8.handsontable, .col-sm-9.handsontable\r\n.col-xs-1.handsontable, .col-xs-10.handsontable, .col-xs-11.handsontable, .col-xs-12.handsontable,\r\n.col-xs-2.handsontable, .col-xs-3.handsontable, .col-xs-4.handsontable, .col-xs-5.handsontable, .col-xs-6.handsontable, .col-xs-7.handsontable, .col-xs-8.handsontable, .col-xs-9.handsontable {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.handsontable .table-striped > tbody > tr:nth-of-type(even) {\r\n  background-color: #FFF;\r\n}\r\n.handsontable {\r\n  position: relative;\r\n}\r\n\r\n.handsontable .hide{\r\n  display: none;\r\n}\r\n.handsontable .relative {\r\n  position: relative;\r\n}\r\n\r\n.handsontable.htAutoSize {\r\n  visibility: hidden;\r\n  left: -99000px;\r\n  position: absolute;\r\n  top: -99000px;\r\n}\r\n\r\n.handsontable .wtHider {\r\n  width: 0;\r\n}\r\n\r\n.handsontable .wtSpreader {\r\n  position: relative;\r\n  width: 0; /*must be 0, otherwise blank space appears in scroll demo after scrolling max to the right */\r\n  height: auto;\r\n}\r\n\r\n.handsontable table,\r\n.handsontable tbody,\r\n.handsontable thead,\r\n.handsontable td,\r\n.handsontable th,\r\n.handsontable input,\r\n.handsontable textarea,\r\n.handsontable div {\r\n  box-sizing: content-box;\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n}\r\n\r\n.handsontable input,\r\n.handsontable textarea {\r\n  min-height: initial;\r\n}\r\n\r\n.handsontable table.htCore {\r\n  border-collapse: separate;\r\n  /* it must be separate, otherwise there are offset miscalculations in WebKit: http://stackoverflow.com/questions/2655987/border-collapse-differences-in-ff-and-webkit */\r\n  /* this actually only changes appearance of user selection - does not make text unselectable */\r\n  /* -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -o-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none; */ /* no browser supports unprefixed version */\r\n  border-spacing: 0;\r\n  margin: 0;\r\n  border-width: 0;\r\n  table-layout: fixed;\r\n  width: 0;\r\n  outline-width: 0;\r\n  /* reset bootstrap table style. for more info see: https://github.com/handsontable/handsontable/issues/224 */\r\n  max-width: none;\r\n  max-height: none;\r\n}\r\n\r\n.handsontable col {\r\n  width: 50px;\r\n}\r\n\r\n.handsontable col.rowHeader {\r\n  width: 50px;\r\n}\r\n\r\n.handsontable th,\r\n.handsontable td {\r\n  border-top-width: 0;\r\n  border-left-width: 0;\r\n  border-right: 1px solid #CCC;\r\n  border-bottom: 1px solid #CCC;\r\n  height: 22px;\r\n  empty-cells: show;\r\n  line-height: 21px;\r\n  padding: 0 4px 0 4px;\r\n  /* top, bottom padding different than 0 is handled poorly by FF with HTML5 doctype */\r\n  background-color: #FFF;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  outline-width: 0;\r\n  white-space: pre-line;\r\n  /* preserve new line character in cell */\r\n  background-clip: padding-box;\r\n}\r\n\r\n.handsontable td.htInvalid {\r\n  background-color: #ff4c42 !important; /*gives priority over td.area selection background*/\r\n}\r\n\r\n.handsontable td.htNoWrap {\r\n  white-space: nowrap;\r\n}\r\n\r\n.handsontable th:last-child {\r\n  /*Foundation framework fix*/\r\n  border-right: 1px solid #CCC;\r\n  border-bottom: 1px solid #CCC;\r\n}\r\n\r\n.handsontable tr:first-child th.htNoFrame,\r\n.handsontable th:first-child.htNoFrame,\r\n.handsontable th.htNoFrame {\r\n  border-left-width: 0;\r\n  background-color: white;\r\n  border-color: #FFF;\r\n}\r\n\r\n.handsontable th:first-child,\r\n.handsontable th:nth-child(2),\r\n.handsontable td:first-of-type,\r\n.handsontable .htNoFrame + th,\r\n.handsontable .htNoFrame + td {\r\n  border-left: 1px solid #CCC;\r\n}\r\n\r\n.handsontable.htRowHeaders thead tr th:nth-child(2) {\r\n  border-left: 1px solid #CCC;\r\n}\r\n\r\n.handsontable tr:first-child th,\r\n.handsontable tr:first-child td {\r\n  border-top: 1px solid #CCC;\r\n}\r\n\r\n.ht_master:not(.innerBorderLeft):not(.emptyColumns) ~ .handsontable tbody tr th,\r\n.ht_master:not(.innerBorderLeft):not(.emptyColumns) ~ .handsontable:not(.ht_clone_top) thead tr th:first-child {\r\n  border-right-width: 0;\r\n}\r\n\r\n.ht_master:not(.innerBorderTop) thead tr:last-child th,\r\n.ht_master:not(.innerBorderTop) ~ .handsontable thead tr:last-child th,\r\n.ht_master:not(.innerBorderTop) thead tr.lastChild th,\r\n.ht_master:not(.innerBorderTop) ~ .handsontable thead tr.lastChild th {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.handsontable th {\r\n  background-color: #f3f3f3;\r\n  color: #222;\r\n  text-align: center;\r\n  font-weight: normal;\r\n  white-space: nowrap;\r\n}\r\n\r\n.handsontable thead th {\r\n  padding: 0;\r\n}\r\n\r\n.handsontable th.active {\r\n  background-color: #CCC;\r\n}\r\n.handsontable thead th .relative {\r\n  padding: 2px 4px;\r\n}\r\n\r\n/* selection */\r\n.handsontable tbody th.ht__highlight,\r\n.handsontable thead th.ht__highlight {\r\n  background-color: #dcdcdc;\r\n}\r\n.handsontable.ht__selection--columns thead th.ht__highlight,\r\n.handsontable.ht__selection--rows tbody th.ht__highlight {\r\n  background-color: #8eb0e7;\r\n  color: #000;\r\n}\r\n\r\n#hot-display-license-info {\r\n  font-size: 9px;\r\n  color: #323232 ;\r\n  padding: 5px 0 3px 0;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  text-align: left;\r\n}\r\n\r\n/* plugins */\r\n\r\n/* row + column resizer*/\r\n.handsontable .manualColumnResizer {\r\n  position: fixed;\r\n  top: 0;\r\n  cursor: col-resize;\r\n  z-index: 110;\r\n  width: 5px;\r\n  height: 25px;\r\n}\r\n\r\n.handsontable .manualRowResizer {\r\n  position: fixed;\r\n  left: 0;\r\n  cursor: row-resize;\r\n  z-index: 110;\r\n  height: 5px;\r\n  width: 50px;\r\n}\r\n\r\n.handsontable .manualColumnResizer:hover,\r\n.handsontable .manualColumnResizer.active,\r\n.handsontable .manualRowResizer:hover,\r\n.handsontable .manualRowResizer.active {\r\n  background-color: #AAB;\r\n}\r\n\r\n.handsontable .manualColumnResizerGuide {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  background-color: #AAB;\r\n  display: none;\r\n  width: 0;\r\n  border-right: 1px dashed #777;\r\n  margin-left: 5px;\r\n}\r\n\r\n.handsontable .manualRowResizerGuide {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: #AAB;\r\n  display: none;\r\n  height: 0;\r\n  border-bottom: 1px dashed #777;\r\n  margin-top: 5px;\r\n}\r\n\r\n.handsontable .manualColumnResizerGuide.active,\r\n.handsontable .manualRowResizerGuide.active {\r\n  display: block;\r\n  z-index: 199;\r\n}\r\n\r\n.handsontable .columnSorting {\r\n  position: relative;\r\n}\r\n\r\n.handsontable .columnSorting:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.handsontable .columnSorting.ascending::after {\r\n  content: '\\25B2';\r\n  color: #5f5f5f;\r\n  position: absolute;\r\n  right: -15px;\r\n}\r\n\r\n.handsontable .columnSorting.descending::after {\r\n  content: '\\25BC';\r\n  color: #5f5f5f;\r\n  position: absolute;\r\n  right: -15px;\r\n}\r\n\r\n/* border line */\r\n\r\n.handsontable .wtBorder {\r\n  position: absolute;\r\n  font-size: 0;\r\n}\r\n.handsontable .wtBorder.hidden{\r\n  display:none !important;\r\n}\r\n\r\n.handsontable td.area,\r\n.handsontable td.area-1,\r\n.handsontable td.area-2,\r\n.handsontable td.area-3,\r\n.handsontable td.area-4,\r\n.handsontable td.area-5,\r\n.handsontable td.area-6,\r\n.handsontable td.area-7 {\r\n  position: relative;\r\n}\r\n\r\n.handsontable td.area:before,\r\n.handsontable td.area-1:before,\r\n.handsontable td.area-2:before,\r\n.handsontable td.area-3:before,\r\n.handsontable td.area-4:before,\r\n.handsontable td.area-5:before,\r\n.handsontable td.area-6:before,\r\n.handsontable td.area-7:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  bottom: -100%\\9; /* Fix for IE9 to spread the \":before\" pseudo element to 100% height of the parent element */\r\n  background: #005eff;\r\n}\r\n\r\n/* Fix for IE10 and IE11 to spread the \":before\" pseudo element to 100% height of the parent element */\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .handsontable td.area:before,\r\n  .handsontable td.area-1:before,\r\n  .handsontable td.area-2:before,\r\n  .handsontable td.area-3:before,\r\n  .handsontable td.area-4:before,\r\n  .handsontable td.area-5:before,\r\n  .handsontable td.area-6:before,\r\n  .handsontable td.area-7:before {\r\n    bottom: -100%;\r\n  }\r\n}\r\n\r\n.handsontable td.area:before {\r\n  opacity: 0.1;\r\n}\r\n.handsontable td.area-1:before {\r\n  opacity: 0.2;\r\n}\r\n.handsontable td.area-2:before {\r\n  opacity: 0.27;\r\n}\r\n.handsontable td.area-3:before {\r\n  opacity: 0.35;\r\n}\r\n.handsontable td.area-4:before {\r\n  opacity: 0.41;\r\n}\r\n.handsontable td.area-5:before {\r\n  opacity: 0.47;\r\n}\r\n.handsontable td.area-6:before {\r\n  opacity: 0.54;\r\n}\r\n.handsontable td.area-7:before {\r\n  opacity: 0.58;\r\n}\r\n\r\n/* fill handle */\r\n\r\n.handsontable .wtBorder.corner {\r\n  font-size: 0;\r\n  cursor: crosshair;\r\n}\r\n\r\n.handsontable .htBorder.htFillBorder {\r\n  background: red;\r\n  width: 1px;\r\n  height: 1px;\r\n}\r\n\r\n.handsontableInput {\r\n  border:none;\r\n  outline-width: 0;\r\n  margin: 0 ;\r\n  padding: 1px 5px 0 5px;\r\n  font-family: inherit;\r\n  line-height: 21px;\r\n  font-size: inherit;\r\n  box-shadow: 0 0 0 2px #5292F7 inset;\r\n  resize: none;\r\n  /*below are needed to overwrite stuff added by jQuery UI Bootstrap theme*/\r\n  display: block;\r\n  color: #000;\r\n  border-radius: 0;\r\n  background-color: #FFF;\r\n  /*overwrite styles potentionally made by a framework*/\r\n}\r\n\r\n.handsontableInputHolder {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n}\r\n\r\n.htSelectEditor {\r\n  -webkit-appearance: menulist-button !important;\r\n  position: absolute;\r\n  width: auto;\r\n}\r\n\r\n/*\r\nTextRenderer readOnly cell\r\n*/\r\n\r\n.handsontable .htDimmed {\r\n  color: #777;\r\n}\r\n\r\n.handsontable .htSubmenu {\r\n  position: relative;\r\n}\r\n\r\n.handsontable .htSubmenu :after{\r\n  content: '\\25B6';\r\n  color: #777;\r\n  position: absolute;\r\n  right: 5px;\r\n}\r\n\r\n\r\n/*\r\nTextRenderer horizontal alignment\r\n*/\r\n.handsontable .htLeft{\r\n  text-align: left;\r\n}\r\n.handsontable .htCenter{\r\n  text-align: center;\r\n}\r\n.handsontable .htRight{\r\n  text-align: right;\r\n}\r\n.handsontable .htJustify{\r\n  text-align: justify;\r\n}\r\n/*\r\nTextRenderer vertical alignment\r\n*/\r\n.handsontable .htTop{\r\n  vertical-align: top;\r\n}\r\n.handsontable .htMiddle{\r\n  vertical-align: middle;\r\n}\r\n.handsontable .htBottom{\r\n  vertical-align: bottom;\r\n}\r\n\r\n/*\r\nTextRenderer placeholder value\r\n*/\r\n\r\n.handsontable .htPlaceholder {\r\n  color: #999;\r\n}\r\n\r\n/*\r\nAutocompleteRenderer down arrow\r\n*/\r\n\r\n.handsontable .htAutocompleteArrow {\r\n  float: right;\r\n  font-size: 10px;\r\n  color: #EEE;\r\n  cursor: default;\r\n  width: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.handsontable td .htAutocompleteArrow:hover {\r\n  color: #777;\r\n}\r\n\r\n.handsontable td.area .htAutocompleteArrow {\r\n  color: #d3d3d3;\r\n}\r\n\r\n/*\r\nCheckboxRenderer\r\n*/\r\n.handsontable .htCheckboxRendererInput {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.handsontable .htCheckboxRendererInput.noValue {\r\n  opacity: 0.5;\r\n}\r\n.handsontable .htCheckboxRendererLabel {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n@-webkit-keyframes opacity-hide {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    /*display: none;*/\r\n  }\r\n}\r\n@keyframes opacity-hide {\r\n  from {\r\n    /*display: block;*/\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    /*display: none;*/\r\n  }\r\n}\r\n\r\n@-webkit-keyframes opacity-show {\r\n  from {\r\n    opacity: 0;\r\n    /*display: none;*/\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    /*display: block;*/\r\n  }\r\n}\r\n@keyframes opacity-show {\r\n  from {\r\n    opacity: 0;\r\n    /*display: none;*/\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    /*display: block;*/\r\n  }\r\n}\r\n\r\n/**\r\n * Handsontable in Handsontable\r\n */\r\n\r\n.handsontable .handsontable.ht_clone_top .wtHider {\r\n  padding: 0 0 5px 0;\r\n}\r\n\r\n/**\r\n* Autocomplete Editor\r\n*/\r\n.handsontable .autocompleteEditor.handsontable {\r\n  padding-right: 17px;\r\n}\r\n.handsontable .autocompleteEditor.handsontable.htMacScroll {\r\n  padding-right: 15px;\r\n}\r\n\r\n\r\n/**\r\n * Handsontable listbox theme\r\n */\r\n\r\n.handsontable.listbox {\r\n  margin: 0;\r\n}\r\n\r\n.handsontable.listbox .ht_master table {\r\n  border: 1px solid #ccc;\r\n  border-collapse: separate;\r\n  background: white;\r\n}\r\n\r\n.handsontable.listbox th,\r\n.handsontable.listbox tr:first-child th,\r\n.handsontable.listbox tr:last-child th,\r\n.handsontable.listbox tr:first-child td,\r\n.handsontable.listbox td {\r\n  border-color: transparent;\r\n}\r\n\r\n.handsontable.listbox th,\r\n.handsontable.listbox td {\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.handsontable.listbox td.htDimmed {\r\n  cursor: default;\r\n  color: inherit;\r\n  font-style: inherit;\r\n}\r\n\r\n.handsontable.listbox .wtBorder {\r\n  visibility: hidden;\r\n}\r\n\r\n.handsontable.listbox tr td.current,\r\n.handsontable.listbox tr:hover td {\r\n  background: #eee;\r\n}\r\n\r\n.ht_clone_top {\r\n  z-index: 101;\r\n}\r\n\r\n.ht_clone_left {\r\n  z-index: 102;\r\n}\r\n\r\n.ht_clone_top_left_corner,\r\n.ht_clone_bottom_left_corner {\r\n  z-index: 103;\r\n}\r\n\r\n.ht_clone_debug {\r\n  z-index: 103;\r\n}\r\n\r\n.handsontable td.htSearchResult {\r\n  background: #fcedd9;\r\n  color: #583707;\r\n}\r\n\r\n/*\r\nCell borders\r\n*/\r\n.htBordered{\r\n  /*box-sizing: border-box !important;*/\r\n  border-width: 1px;\r\n}\r\n.htBordered.htTopBorderSolid {\r\n  border-top-style: solid;\r\n  border-top-color: #000;\r\n}\r\n.htBordered.htRightBorderSolid {\r\n  border-right-style: solid;\r\n  border-right-color: #000;\r\n}\r\n.htBordered.htBottomBorderSolid {\r\n  border-bottom-style: solid;\r\n  border-bottom-color: #000;\r\n}\r\n.htBordered.htLeftBorderSolid {\r\n  border-left-style: solid;\r\n  border-left-color: #000;\r\n}\r\n\r\n.handsontable tbody tr th:nth-last-child(2) {\r\n  border-right: 1px solid #CCC;\r\n}\r\n\r\n.handsontable thead tr:nth-last-child(2) th.htGroupIndicatorContainer {\r\n  border-bottom: 1px solid #CCC;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n\r\n.ht_clone_top_left_corner thead tr th:nth-last-child(2) {\r\n  border-right: 1px solid #CCC;\r\n}\r\n\r\n.htCollapseButton {\r\n  width: 10px;\r\n  height: 10px;\r\n  line-height: 10px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  border: 1px solid #f3f3f3;\r\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\r\n  cursor: pointer;\r\n  margin-bottom: 3px;\r\n  position: relative;\r\n}\r\n\r\n.htCollapseButton:after {\r\n  content: \"\";\r\n  height: 300%;\r\n  width: 1px;\r\n  display: block;\r\n  background: #ccc;\r\n  margin-left: 4px;\r\n  position: absolute;\r\n  /*top: -300%;*/\r\n  bottom: 10px;\r\n}\r\n\r\n\r\nthead .htCollapseButton {\r\n  right: 5px;\r\n  position: absolute;\r\n  top: 5px;\r\n  background: #fff;\r\n}\r\n\r\nthead .htCollapseButton:after {\r\n  height: 1px;\r\n  width: 700%;\r\n  right: 10px;\r\n  top: 4px;\r\n}\r\n\r\n.handsontable tr th .htExpandButton {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  line-height: 10px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  border: 1px solid #f3f3f3;\r\n  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\r\n  cursor: pointer;\r\n  top: 0;\r\n  display: none;\r\n}\r\n\r\n.handsontable thead tr th .htExpandButton {\r\n  /*left: 5px;*/\r\n  top: 5px;\r\n}\r\n\r\n.handsontable tr th .htExpandButton.clickable {\r\n  display: block;\r\n}\r\n\r\n.collapsibleIndicator {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(0% ,-50%);\r\n  right: 5px;\r\n  border: 1px solid #A6A6A6;\r\n  line-height: 10px;\r\n  color: #222;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  width: 10px;\r\n  height: 10px;\r\n  cursor: pointer;\r\n  -webkit-box-shadow: 0 0 0 6px rgba(238,238,238,1);\r\n  -moz-box-shadow: 0 0 0 6px rgba(238,238,238,1);\r\n  box-shadow: 0 0 0 6px rgba(238,238,238,1);\r\n  background: #eee;\r\n}\r\n\r\n.handsontable col.hidden {\r\n  width: 0 !important;\r\n}\r\n\r\n.handsontable table tr th.lightRightBorder {\r\n  border-right: 1px solid #E6E6E6;\r\n}\r\n\r\n.handsontable tr.hidden,\r\n.handsontable tr.hidden td,\r\n.handsontable tr.hidden th {\r\n  display: none;\r\n}\r\n\r\n.ht_master,\r\n.ht_clone_left,\r\n.ht_clone_top,\r\n.ht_clone_bottom {\r\n  overflow: hidden;\r\n}\r\n\r\n.ht_master .wtHolder {\r\n  overflow: auto;\r\n}\r\n\r\n.ht_clone_left .wtHolder {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.ht_clone_top .wtHolder,\r\n.ht_clone_bottom .wtHolder {\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n\r\n\r\n/*WalkontableDebugOverlay*/\r\n\r\n.wtDebugHidden {\r\n  display: none;\r\n}\r\n\r\n.wtDebugVisible {\r\n  display: block;\r\n  -webkit-animation-duration: 0.5s;\r\n  -webkit-animation-name: wtFadeInFromNone;\r\n  animation-duration: 0.5s;\r\n  animation-name: wtFadeInFromNone;\r\n}\r\n\r\n@keyframes wtFadeInFromNone {\r\n  0% {\r\n    display: none;\r\n    opacity: 0;\r\n  }\r\n\r\n  1% {\r\n    display: block;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes wtFadeInFromNone {\r\n  0% {\r\n    display: none;\r\n    opacity: 0;\r\n  }\r\n\r\n  1% {\r\n    display: block;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n}\r\n/*\r\n\r\n Handsontable Mobile Text Editor stylesheet\r\n\r\n */\r\n\r\n.handsontable.mobile,\r\n.handsontable.mobile .wtHolder {\r\n  -webkit-touch-callout:none;\r\n  -webkit-user-select:none;\r\n  -khtml-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n  -webkit-tap-highlight-color:rgba(0,0,0,0);\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.htMobileEditorContainer {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 70%;\r\n  height: 54pt;\r\n  background: #f8f8f8;\r\n  border-radius: 20px;\r\n  border: 1px solid #ebebeb;\r\n  z-index: 999;\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -webkit-text-size-adjust: none;\r\n}\r\n\r\n.topLeftSelectionHandle:not(.ht_master .topLeftSelectionHandle),\r\n.topLeftSelectionHandle-HitArea:not(.ht_master .topLeftSelectionHandle-HitArea) {\r\n  z-index: 9999;\r\n}\r\n\r\n/* Initial left/top coordinates - overwritten when actual position is set */\r\n.topLeftSelectionHandle,\r\n.topLeftSelectionHandle-HitArea,\r\n.bottomRightSelectionHandle,\r\n.bottomRightSelectionHandle-HitArea {\r\n  left: -10000px;\r\n  top: -10000px;\r\n}\r\n\r\n.htMobileEditorContainer.active {\r\n  display: block;\r\n}\r\n\r\n.htMobileEditorContainer .inputs {\r\n  position: absolute;\r\n  right: 210pt;\r\n  bottom: 10pt;\r\n  top: 10pt;\r\n  left: 14px;\r\n  height: 34pt;\r\n}\r\n\r\n.htMobileEditorContainer .inputs textarea {\r\n  font-size: 13pt;\r\n  border: 1px solid #a1a1a1;\r\n  -webkit-appearance: none;\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n  position: absolute;\r\n  left: 14px;\r\n  right: 14px;\r\n  top: 0;\r\n  bottom: 0;\r\n  padding: 7pt;\r\n}\r\n\r\n.htMobileEditorContainer .cellPointer {\r\n  position: absolute;\r\n  top: -13pt;\r\n  height: 0;\r\n  width: 0;\r\n  left: 30px;\r\n\r\n  border-left: 13pt solid transparent;\r\n  border-right: 13pt solid transparent;\r\n  border-bottom: 13pt solid #ebebeb;\r\n}\r\n\r\n.htMobileEditorContainer .cellPointer.hidden {\r\n  display: none;\r\n}\r\n\r\n.htMobileEditorContainer .cellPointer:before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 2px;\r\n  height: 0;\r\n  width: 0;\r\n  left: -13pt;\r\n\r\n  border-left: 13pt solid transparent;\r\n  border-right: 13pt solid transparent;\r\n  border-bottom: 13pt solid #f8f8f8;\r\n}\r\n\r\n.htMobileEditorContainer .moveHandle {\r\n  position: absolute;\r\n  top: 10pt;\r\n  left: 5px;\r\n  width: 30px;\r\n  bottom: 0px;\r\n  cursor: move;\r\n  z-index: 9999;\r\n}\r\n\r\n.htMobileEditorContainer .moveHandle:after {\r\n  content: \"..\\A..\\A..\\A..\";\r\n  white-space: pre;\r\n  line-height: 10px;\r\n  font-size: 20pt;\r\n  display: inline-block;\r\n  margin-top: -8px;\r\n  color: #ebebeb;\r\n}\r\n\r\n.htMobileEditorContainer .positionControls {\r\n  width: 205pt;\r\n  position: absolute;\r\n  right: 5pt;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.htMobileEditorContainer .positionControls > div {\r\n  width: 50pt;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n.htMobileEditorContainer .positionControls > div:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 15pt;\r\n  height: 15pt;\r\n  text-align: center;\r\n  line-height: 50pt;\r\n}\r\n\r\n.htMobileEditorContainer .leftButton:after,\r\n.htMobileEditorContainer .rightButton:after,\r\n.htMobileEditorContainer .upButton:after,\r\n.htMobileEditorContainer .downButton:after {\r\n  transform-origin: 5pt 5pt;\r\n  -webkit-transform-origin: 5pt 5pt;\r\n  margin: 21pt 0 0 21pt;\r\n}\r\n\r\n.htMobileEditorContainer .leftButton:after {\r\n  border-top: 2px solid #288ffe;\r\n  border-left: 2px solid #288ffe;\r\n  -webkit-transform: rotate(-45deg);\r\n  /*margin-top: 17pt;*/\r\n  /*margin-left: 20pt;*/\r\n}\r\n.htMobileEditorContainer .leftButton:active:after {\r\n  border-color: #cfcfcf;\r\n}\r\n\r\n.htMobileEditorContainer .rightButton:after {\r\n  border-top: 2px solid #288ffe;\r\n  border-left: 2px solid #288ffe;\r\n  -webkit-transform: rotate(135deg);\r\n  /*margin-top: 17pt;*/\r\n  /*margin-left: 10pt;*/\r\n}\r\n.htMobileEditorContainer .rightButton:active:after {\r\n  border-color: #cfcfcf;\r\n}\r\n\r\n.htMobileEditorContainer .upButton:after {\r\n  /*border-top: 2px solid #cfcfcf;*/\r\n  border-top: 2px solid #288ffe;\r\n  border-left: 2px solid #288ffe;\r\n  -webkit-transform: rotate(45deg);\r\n  /*margin-top: 22pt;*/\r\n  /*margin-left: 15pt;*/\r\n}\r\n.htMobileEditorContainer .upButton:active:after {\r\n  border-color: #cfcfcf;\r\n}\r\n\r\n.htMobileEditorContainer .downButton:after {\r\n  border-top: 2px solid #288ffe;\r\n  border-left: 2px solid #288ffe;\r\n  -webkit-transform: rotate(225deg);\r\n  /*margin-top: 15pt;*/\r\n  /*margin-left: 15pt;*/\r\n}\r\n.htMobileEditorContainer .downButton:active:after {\r\n  border-color: #cfcfcf;\r\n}\r\n\r\n.handsontable.hide-tween {\r\n  -webkit-animation: opacity-hide 0.3s;\r\n  animation: opacity-hide 0.3s;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-fill-mode: forwards;\r\n}\r\n\r\n.handsontable.show-tween {\r\n  -webkit-animation: opacity-show 0.3s;\r\n  animation: opacity-show 0.3s;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-fill-mode: forwards;\r\n}\r\n@charset \"UTF-8\";\r\n\r\n/*!\r\n * Pikaday\r\n * Copyright © 2014 David Bushell | BSD & MIT license | http://dbushell.com/\r\n */\r\n\r\n.pika-single {\r\n    z-index: 9999;\r\n    display: block;\r\n    position: relative;\r\n    color: #333;\r\n    background: #fff;\r\n    border: 1px solid #ccc;\r\n    border-bottom-color: #bbb;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/*\r\nclear child float (pika-lendar), using the famous micro clearfix hack\r\nhttp://nicolasgallagher.com/micro-clearfix-hack/\r\n*/\r\n.pika-single:before,\r\n.pika-single:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n.pika-single:after { clear: both }\r\n.pika-single { *zoom: 1 }\r\n\r\n.pika-single.is-hidden {\r\n    display: none;\r\n}\r\n\r\n.pika-single.is-bound {\r\n    position: absolute;\r\n    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\r\n}\r\n\r\n.pika-lendar {\r\n    float: left;\r\n    width: 240px;\r\n    margin: 8px;\r\n}\r\n\r\n.pika-title {\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.pika-label {\r\n    display: inline-block;\r\n    *display: inline;\r\n    position: relative;\r\n    z-index: 9999;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 5px 3px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    background-color: #fff;\r\n}\r\n.pika-title select {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    z-index: 9998;\r\n    margin: 0;\r\n    left: 0;\r\n    top: 5px;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n}\r\n\r\n.pika-prev,\r\n.pika-next {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: relative;\r\n    outline: none;\r\n    border: 0;\r\n    padding: 0;\r\n    width: 20px;\r\n    height: 30px;\r\n    /* hide text using text-indent trick, using width value (it's enough) */\r\n    text-indent: 20px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: 75% 75%;\r\n    opacity: .5;\r\n    *position: absolute;\r\n    *top: 0;\r\n}\r\n\r\n.pika-prev:hover,\r\n.pika-next:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.pika-prev,\r\n.is-rtl .pika-next {\r\n    float: left;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');\r\n    *left: 0;\r\n}\r\n\r\n.pika-next,\r\n.is-rtl .pika-prev {\r\n    float: right;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');\r\n    *right: 0;\r\n}\r\n\r\n.pika-prev.is-disabled,\r\n.pika-next.is-disabled {\r\n    cursor: default;\r\n    opacity: .2;\r\n}\r\n\r\n.pika-select {\r\n    display: inline-block;\r\n    *display: inline;\r\n}\r\n\r\n.pika-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border: 0;\r\n}\r\n\r\n.pika-table th,\r\n.pika-table td {\r\n    width: 14.285714285714286%;\r\n    padding: 0;\r\n}\r\n\r\n.pika-table th {\r\n    color: #999;\r\n    font-size: 12px;\r\n    line-height: 25px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.pika-button {\r\n    cursor: pointer;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    outline: none;\r\n    border: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 5px;\r\n    color: #666;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    text-align: right;\r\n    background: #f5f5f5;\r\n}\r\n\r\n.pika-week {\r\n    font-size: 11px;\r\n    color: #999;\r\n}\r\n\r\n.is-today .pika-button {\r\n    color: #33aaff;\r\n    font-weight: bold;\r\n}\r\n\r\n.is-selected .pika-button {\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background: #33aaff;\r\n    box-shadow: inset 0 1px 3px #178fe5;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-inrange .pika-button {\r\n    background: #D5E9F7;\r\n}\r\n\r\n.is-startrange .pika-button {\r\n    color: #fff;\r\n    background: #6CB31D;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-endrange .pika-button {\r\n    color: #fff;\r\n    background: #33aaff;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-disabled .pika-button,\r\n.is-outside-current-month .pika-button {\r\n    pointer-events: none;\r\n    cursor: default;\r\n    color: #999;\r\n    opacity: .3;\r\n}\r\n\r\n.pika-button:hover {\r\n    color: #fff;\r\n    background: #ff8000;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* styling for abbr */\r\n.pika-table abbr {\r\n    border-bottom: none;\r\n    cursor: help;\r\n}\r\n\r\n.htCommentCell {\r\n    position: relative;\r\n}\r\n\r\n.htCommentCell:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border-left: 6px solid transparent;\r\n    border-top: 6px solid black;\r\n}\r\n\r\n.htComments {\r\n    display: none;\r\n    z-index: 1059;\r\n    position: absolute;\r\n}\r\n\r\n.htCommentTextArea {\r\n    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    border-left: 3px solid #ccc;\r\n    background-color: #fff;\r\n    width: 215px;\r\n    height: 90px;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n    outline: 0px !important;\r\n    -webkit-appearance: none;\r\n}\r\n\r\n.htCommentTextArea:focus {\r\n    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px, rgba(0, 0, 0, 0.239216) 0 1px 2px, inset 0 0 0 1px #5292f7;\r\n    border-left: 3px solid #5292f7;\r\n}\r\n/*!\r\n * Handsontable ContextMenu\r\n */\r\n\r\n.htContextMenu {\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 1060; /* needs to be higher than 1050 - z-index for Twitter Bootstrap modal (#1569) */\r\n}\r\n\r\n.htContextMenu .ht_clone_top,\r\n.htContextMenu .ht_clone_left,\r\n.htContextMenu .ht_clone_corner,\r\n.htContextMenu .ht_clone_debug {\r\n  display: none;\r\n}\r\n\r\n.htContextMenu table.htCore {\r\n  border: 1px solid #ccc;\r\n  border-bottom-width: 2px;\r\n  border-right-width: 2px;\r\n}\r\n\r\n.htContextMenu .wtBorder {\r\n  visibility: hidden;\r\n}\r\n\r\n.htContextMenu table tbody tr td {\r\n  background: white;\r\n  border-width: 0;\r\n  padding: 4px 6px 0 6px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.htContextMenu table tbody tr td:first-child {\r\n  border: 0;\r\n}\r\n\r\n.htContextMenu table tbody tr td.htDimmed {\r\n  font-style: normal;\r\n  color: #323232;\r\n}\r\n\r\n.htContextMenu table tbody tr td.current,\r\n.htContextMenu table tbody tr td.zeroclipboard-is-hover {\r\n  background: #f3f3f3;\r\n}\r\n\r\n.htContextMenu table tbody tr td.htSeparator {\r\n  border-top: 1px solid #bbb;\r\n  height: 0;\r\n  padding: 0;\r\n  cursor: default;\r\n}\r\n\r\n.htContextMenu table tbody tr td.htDisabled {\r\n  color: #999;\r\n  cursor: default;\r\n}\r\n\r\n.htContextMenu table tbody tr td.htDisabled:hover {\r\n  background: #fff;\r\n  color: #999;\r\n  cursor: default;\r\n}\r\n\r\n.htContextMenu table tbody tr.htHidden {\r\n  display: none;\r\n}\r\n\r\n.htContextMenu table tbody tr td .htItemWrapper {\r\n  margin-left: 10px;\r\n  margin-right: 6px;\r\n}\r\n\r\n.htContextMenu table tbody tr td div span.selected {\r\n  margin-top: -2px;\r\n  position: absolute;\r\n  left: 4px;\r\n}\r\n\r\n.htContextMenu .ht_master .wtHolder {\r\n  overflow: hidden;\r\n}\r\ntextarea#HandsontableCopyPaste {\r\n  position: fixed !important;\r\n  top: 0 !important;\r\n  right: 100% !important;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  outline: 0 none !important;\r\n}\r\n.htRowHeaders .ht_master.innerBorderLeft ~ .ht_clone_top_left_corner th:nth-child(2),\r\n.htRowHeaders .ht_master.innerBorderLeft ~ .ht_clone_left td:first-of-type {\r\n  border-left: 0 none;\r\n}\r\n.handsontable .wtHider {\r\n  position: relative;\r\n}\r\n.handsontable.ht__manualColumnMove.after-selection--columns thead th.ht__highlight {\r\n  cursor: move;\r\n  cursor: -moz-grab;\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n.handsontable.ht__manualColumnMove.on-moving--columns,\r\n.handsontable.ht__manualColumnMove.on-moving--columns thead th.ht__highlight {\r\n  cursor: move;\r\n  cursor: -moz-grabbing;\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n.handsontable.ht__manualColumnMove.on-moving--columns .manualColumnResizer {\r\n  display: none;\r\n}\r\n.handsontable .ht__manualColumnMove--guideline,\r\n.handsontable .ht__manualColumnMove--backlight {\r\n  position: absolute;\r\n  height: 100%;\r\n  display: none;\r\n}\r\n.handsontable .ht__manualColumnMove--guideline {\r\n  background: #757575;\r\n  width: 2px;\r\n  top: 0;\r\n  margin-left: -1px;\r\n  z-index: 105;\r\n}\r\n.handsontable .ht__manualColumnMove--backlight {\r\n  background: #343434;\r\n  background: rgba(52, 52, 52, 0.25);\r\n  display: none;\r\n  z-index: 105;\r\n  pointer-events: none;\r\n}\r\n.handsontable.on-moving--columns.show-ui .ht__manualColumnMove--guideline,\r\n.handsontable.on-moving--columns .ht__manualColumnMove--backlight {\r\n  display: block;\r\n}\r\n.handsontable .wtHider {\r\n  position: relative;\r\n}\r\n.handsontable.ht__manualRowMove.after-selection--rows tbody th.ht__highlight {\r\n  cursor: move;\r\n  cursor: -moz-grab;\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n.handsontable.ht__manualRowMove.on-moving--rows,\r\n.handsontable.ht__manualRowMove.on-moving--rows tbody th.ht__highlight {\r\n  cursor: move;\r\n  cursor: -moz-grabbing;\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n.handsontable.ht__manualRowMove.on-moving--rows .manualRowResizer {\r\n  display: none;\r\n}\r\n.handsontable .ht__manualRowMove--guideline,\r\n.handsontable .ht__manualRowMove--backlight {\r\n  position: absolute;\r\n  width: 100%;\r\n  display: none;\r\n}\r\n.handsontable .ht__manualRowMove--guideline {\r\n  background: #757575;\r\n  height: 2px;\r\n  left: 0;\r\n  margin-top: -1px;\r\n  z-index: 105;\r\n}\r\n.handsontable .ht__manualRowMove--backlight {\r\n  background: #343434;\r\n  background: rgba(52, 52, 52, 0.25);\r\n  display: none;\r\n  z-index: 105;\r\n  pointer-events: none;\r\n}\r\n.handsontable.on-moving--rows.show-ui .ht__manualRowMove--guideline,\r\n.handsontable.on-moving--rows .ht__manualRowMove--backlight {\r\n  display: block;\r\n}\r\n.handsontable.ht__selection--rows tbody td[rowspan][class*=\"area\"][class*=\"highlight\"]:before,\r\n.handsontable.ht__selection--columns tbody td[colspan][class*=\"area\"][class*=\"highlight\"]:before {\r\n    background: inherit;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-handsontable.js.map