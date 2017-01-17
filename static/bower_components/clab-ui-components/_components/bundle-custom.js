/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Polymer = exports.Polymer = window.Polymer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fYXNzZXRzL2pzL3BvbHltZXIuanM/N2UzYiJdLCJuYW1lcyI6WyJQb2x5bWVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFFTyxJQUFNQSw0QkFBVUMsT0FBT0QsT0FBdkIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL19hc3NldHMvanMvcG9seW1lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SpinnerClab = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _polymer = __webpack_require__(1);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SpinnerClab = exports.SpinnerClab = function () {\n  function SpinnerClab() {\n    _classCallCheck(this, SpinnerClab);\n  }\n\n  _createClass(SpinnerClab, [{\n    key: 'beforeRegister',\n    value: function beforeRegister() {\n      this.is = 'spinner-clab';\n      this.properties = {\n        dark: {\n          type: Boolean,\n          value: false\n        },\n        big: {\n          type: Boolean,\n          value: false\n        },\n        background: {\n          type: String,\n          value: '240, 240, 240, 0.9'\n        },\n        visible: {\n          type: Boolean,\n          value: false\n        }\n      };\n    }\n\n    /*----------\n    COMPUTED\n    ----------*/\n\n  }, {\n    key: '_computeClass',\n    value: function _computeClass(big, dark) {\n      var str = 'spinner-overlay ';\n      this.dark ? str += ' dark ' : null;\n      this.big ? str += ' big ' : null;\n      return str;\n    }\n  }, {\n    key: '_computeBgColor',\n    value: function _computeBgColor(color) {\n      return 'background-color: rgba(' + color + ')';\n    }\n  }]);\n\n  return SpinnerClab;\n}();\n\n(0, _polymer.Polymer)(SpinnerClab);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcGlubmVyL3NjcmlwdC5lczYuanM/MjE4NyJdLCJuYW1lcyI6WyJTcGlubmVyQ2xhYiIsImlzIiwicHJvcGVydGllcyIsImRhcmsiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwiYmlnIiwiYmFja2dyb3VuZCIsIlN0cmluZyIsInZpc2libGUiLCJzdHIiLCJjb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7O0lBSWFBLFcsV0FBQUEsVzs7Ozs7OztxQ0FFTTtBQUNmLFdBQUtDLEVBQUwsR0FBVSxjQUFWO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQjtBQUNoQkMsY0FBTTtBQUNKQyxnQkFBTUMsT0FERjtBQUVKQyxpQkFBTztBQUZILFNBRFU7QUFLaEJDLGFBQUs7QUFDSEgsZ0JBQU1DLE9BREg7QUFFSEMsaUJBQU87QUFGSixTQUxXO0FBU2hCRSxvQkFBWTtBQUNWSixnQkFBTUssTUFESTtBQUVWSCxpQkFBTztBQUZHLFNBVEk7QUFhaEJJLGlCQUFTO0FBQ1BOLGdCQUFNQyxPQURDO0FBRVBDLGlCQUFPO0FBRkE7QUFiTyxPQUFsQjtBQWtCRDs7QUFJRDs7Ozs7O2tDQUdjQyxHLEVBQUtKLEksRUFBTTtBQUN2QixVQUFJUSxNQUFNLGtCQUFWO0FBQ0EsV0FBS1IsSUFBTCxHQUFZUSxPQUFPLFFBQW5CLEdBQThCLElBQTlCO0FBQ0EsV0FBS0osR0FBTCxHQUFXSSxPQUFPLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0EsYUFBT0EsR0FBUDtBQUNEOzs7b0NBRWVDLEssRUFBTztBQUNyQixhQUFPLDRCQUE0QkEsS0FBNUIsR0FBb0MsR0FBM0M7QUFDRDs7Ozs7O0FBR0gsc0JBQVFaLFdBQVIiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtcbiAgUG9seW1lclxufSBmcm9tIFwiLi8uLi9fYXNzZXRzL2pzL3BvbHltZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDbGFiIHtcblxuICBiZWZvcmVSZWdpc3RlcigpIHtcbiAgICB0aGlzLmlzID0gJ3NwaW5uZXItY2xhYic7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge1xuICAgICAgZGFyazoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBiaWc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnMjQwLCAyNDAsIDI0MCwgMC45J1xuICAgICAgfSxcbiAgICAgIHZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICAvKi0tLS0tLS0tLS1cbiAgQ09NUFVURURcbiAgLS0tLS0tLS0tLSovXG4gIF9jb21wdXRlQ2xhc3MoYmlnLCBkYXJrKSB7XG4gICAgbGV0IHN0ciA9ICdzcGlubmVyLW92ZXJsYXkgJztcbiAgICB0aGlzLmRhcmsgPyBzdHIgKz0gJyBkYXJrICcgOiBudWxsO1xuICAgIHRoaXMuYmlnID8gc3RyICs9ICcgYmlnICcgOiBudWxsO1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBfY29tcHV0ZUJnQ29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoJyArIGNvbG9yICsgJyknO1xuICB9XG5cbn1cblBvbHltZXIoU3Bpbm5lckNsYWIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3Bpbm5lci9zY3JpcHQuZXM2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TooltipClab = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _polymer = __webpack_require__(1);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TooltipClab = exports.TooltipClab = function () {\n  function TooltipClab() {\n    _classCallCheck(this, TooltipClab);\n  }\n\n  _createClass(TooltipClab, [{\n    key: \"beforeRegister\",\n    value: function beforeRegister() {\n      this.is = \"tooltip-clab\";\n      this.properties = {\n        type: {\n          type: String,\n          value: \"\"\n        },\n        visible: {\n          type: Boolean,\n          value: false,\n          observer: '_observVisibility'\n        },\n        wait: {\n          type: Number,\n          value: 500\n        }\n      };\n    }\n\n    /*----------\n    EVENT HANDLERS\n    ----------*/\n\n  }, {\n    key: \"_handleMouseOnLabel\",\n    value: function _handleMouseOnLabel(evt) {\n      var _this = this;\n\n      switch (evt.type) {\n        case 'mouseenter':\n          this._resetTimeout('hideInterval');\n          if (!this.visible) {\n            this._startTimeout('showInterval', function () {\n              _this.show();\n            }, this.wait);\n          }\n          break;\n        case 'mouseleave':\n          this._resetTimeout('showInterval');\n          if (this.visible) {\n            this._startTimeout('hideInterval', function () {\n              _this.hide();\n            }, 100);\n          }\n          break;\n      }\n    }\n  }, {\n    key: \"_handleMouseOnTT\",\n    value: function _handleMouseOnTT(evt) {\n      var _this2 = this;\n\n      switch (evt.type) {\n        case 'mouseenter':\n          this._resetTimeout('hideInterval');\n          break;\n        case 'mouseleave':\n          this._startTimeout('hideInterval', function () {\n            _this2.hide();\n          }, 100);\n          break;\n      }\n    }\n\n    /*----------\n    METHODS\n    ----------*/\n\n  }, {\n    key: \"_startTimeout\",\n    value: function _startTimeout(type, fn, time) {\n      if (this[type] != undefined) this._resetTimeout();\n      this[type] = this.async(function () {\n        fn();\n      }, time);\n    }\n  }, {\n    key: \"_resetTimeout\",\n    value: function _resetTimeout(type) {\n      this.cancelAsync(this[type]);\n      this[type] = undefined;\n    }\n  }, {\n    key: \"_positionHorizontal\",\n    value: function _positionHorizontal(left, right, arrowLeft) {\n      var tooltip = this.querySelector('.tooltip');\n      var arrow = this.querySelector('.tooltip .arrow');\n\n      tooltip.style.left = left;\n      tooltip.style.right = right;\n      arrow.style.left = arrowLeft + 'px';\n    }\n  }, {\n    key: \"_positionVertical\",\n    value: function _positionVertical(tooltipTop, rotation, top, bottom) {\n      var tooltip = this.querySelector('.tooltip');\n      var arrow = this.querySelector('.tooltip .arrow');\n\n      tooltip.style.top = tooltipTop + 'px';\n      arrow.style.webkitTransform = 'rotate(' + rotation + 'deg)';\n      arrow.style.msTransform = 'rotate(' + rotation + 'deg)';\n      arrow.style.transform = 'rotate(' + rotation + 'deg)';\n      arrow.style.top = top;\n      arrow.style.bottom = bottom;\n    }\n  }, {\n    key: \"_setTooltipPosition\",\n    value: function _setTooltipPosition() {\n      var targetSize = void 0;\n      if (_polymer.Polymer.dom(this.querySelector('.tt-label')).node.$) //if the content is a component or not\n        targetSize = _polymer.Polymer.dom(this.querySelector('.tt-label')).node.children[0].getBoundingClientRect();else targetSize = this.querySelector('.tt-label').getBoundingClientRect();\n      var tooltipSize = this.querySelector('.tooltip').getBoundingClientRect();\n      var center = targetSize.left + targetSize.width / 2;\n\n      if (tooltipSize.width / 2 > center - 20) // rientra a sinistra\n        this._positionHorizontal('20px', 'auto', center - 25);else if (center + tooltipSize.width / 2 > window.innerWidth - 20) // rientra a destra\n        this._positionHorizontal('auto', '20px', tooltipSize.width - targetSize.width / 2 - 5);else this._positionHorizontal(center - tooltipSize.width / 2 + 'px', 'auto', tooltipSize.width / 2 - 5);\n      if (targetSize.bottom + tooltipSize.height > window.innerHeight) // allinea verticalmente\n        this._positionVertical(targetSize.top - tooltipSize.height - 5, '-135', 'auto', '-5px');else this._positionVertical(targetSize.bottom + 5, '45', '-5px', 'auto');\n    }\n\n    /*----------\n    OBSERVERS\n    ----------*/\n\n  }, {\n    key: \"_observVisibility\",\n    value: function _observVisibility(newv, oldv) {\n      var _this3 = this;\n\n      var hideTooltip = function hideTooltip(evt) {\n        _this3.hide();\n        document.body.removeEventListener('wheel', hideTooltip.bind(_this3));\n      };\n      if (newv) {\n        document.body.addEventListener('wheel', hideTooltip.bind(this));\n      }\n    }\n\n    /*----------\n    COMPUTED\n    ----------*/\n\n  }, {\n    key: \"_computeTooltipClass\",\n    value: function _computeTooltipClass(type, visible) {\n      var arr = ['tooltip'];\n      if (type) arr.push(type);\n      if (visible) arr.push('visible');\n      return arr.join(' ');\n    }\n\n    /*----------\n    PUBLIC\n    ----------*/\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.targetPosition = window.getComputedStyle(this).getPropertyValue('position');\n      this.visible = true;\n      // Polymer.dom.flush();\n\n      this._setTooltipPosition();\n      this.querySelector('.tooltip').style.opacity = '1';\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.querySelector('.tooltip').style.opacity = '0';\n      this.visible = false;\n    }\n  }]);\n\n  return TooltipClab;\n}();\n\n(0, _polymer.Polymer)(TooltipClab);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90b29sdGlwL3NjcmlwdC5lczYuanM/MGY1YyJdLCJuYW1lcyI6WyJUb29sdGlwQ2xhYiIsImlzIiwicHJvcGVydGllcyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInZpc2libGUiLCJCb29sZWFuIiwib2JzZXJ2ZXIiLCJ3YWl0IiwiTnVtYmVyIiwiZXZ0IiwiX3Jlc2V0VGltZW91dCIsIl9zdGFydFRpbWVvdXQiLCJzaG93IiwiaGlkZSIsImZuIiwidGltZSIsInVuZGVmaW5lZCIsImFzeW5jIiwiY2FuY2VsQXN5bmMiLCJsZWZ0IiwicmlnaHQiLCJhcnJvd0xlZnQiLCJ0b29sdGlwIiwicXVlcnlTZWxlY3RvciIsImFycm93Iiwic3R5bGUiLCJ0b29sdGlwVG9wIiwicm90YXRpb24iLCJ0b3AiLCJib3R0b20iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsInRhcmdldFNpemUiLCJkb20iLCJub2RlIiwiJCIsImNoaWxkcmVuIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9vbHRpcFNpemUiLCJjZW50ZXIiLCJ3aWR0aCIsIl9wb3NpdGlvbkhvcml6b250YWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJfcG9zaXRpb25WZXJ0aWNhbCIsIm5ld3YiLCJvbGR2IiwiaGlkZVRvb2x0aXAiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcnIiLCJwdXNoIiwiam9pbiIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJfc2V0VG9vbHRpcFBvc2l0aW9uIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7O0lBSWFBLFcsV0FBQUEsVzs7Ozs7OztxQ0FFTTtBQUNmLFdBQUtDLEVBQUwsR0FBVSxjQUFW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bkIsRUFBK0JFLEtBQS9CLENBQXFDc0MsT0FBckMsR0FBK0MsR0FBL0M7QUFDQSxXQUFLM0QsT0FBTCxHQUFlLEtBQWY7QUFDRDs7Ozs7O0FBS0gsc0JBQVFOLFdBQVIiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtcbiAgUG9seW1lclxufSBmcm9tIFwiLi8uLi9fYXNzZXRzL2pzL3BvbHltZXJcIjtcblxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDbGFiIHtcblxuICBiZWZvcmVSZWdpc3RlcigpIHtcbiAgICB0aGlzLmlzID0gXCJ0b29sdGlwLWNsYWJcIjtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfb2JzZXJ2VmlzaWJpbGl0eSdcbiAgICAgIH0sXG4gICAgICB3YWl0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICAvKi0tLS0tLS0tLS1cbiAgRVZFTlQgSEFORExFUlNcbiAgLS0tLS0tLS0tLSovXG4gIF9oYW5kbGVNb3VzZU9uTGFiZWwoZXZ0KSB7XG4gICAgc3dpdGNoKGV2dC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgdGhpcy5fcmVzZXRUaW1lb3V0KCdoaWRlSW50ZXJ2YWwnKTtcbiAgICAgICAgaWYoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZW91dCgnc2hvd0ludGVydmFsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgfSwgdGhpcy53YWl0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlbGVhdmUnOlxuICAgICAgICB0aGlzLl9yZXNldFRpbWVvdXQoJ3Nob3dJbnRlcnZhbCcpO1xuICAgICAgICBpZih0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLl9zdGFydFRpbWVvdXQoJ2hpZGVJbnRlcnZhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZU1vdXNlT25UVChldnQpIHtcbiAgICBzd2l0Y2goZXZ0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICB0aGlzLl9yZXNldFRpbWVvdXQoJ2hpZGVJbnRlcnZhbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlbGVhdmUnOlxuICAgICAgICB0aGlzLl9zdGFydFRpbWVvdXQoJ2hpZGVJbnRlcnZhbCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuXG5cblxuICAvKi0tLS0tLS0tLS1cbiAgTUVUSE9EU1xuICAtLS0tLS0tLS0tKi9cbiAgX3N0YXJ0VGltZW91dCh0eXBlLCBmbiwgdGltZSkge1xuICAgIGlmKHRoaXNbdHlwZV0gIT0gdW5kZWZpbmVkKSB0aGlzLl9yZXNldFRpbWVvdXQoKTtcbiAgICB0aGlzW3R5cGVdID0gdGhpcy5hc3luYygoKSA9PiB7XG4gICAgICBmbigpO1xuICAgIH0sIHRpbWUpO1xuICB9XG4gIF9yZXNldFRpbWVvdXQodHlwZSkge1xuICAgIHRoaXMuY2FuY2VsQXN5bmModGhpc1t0eXBlXSk7XG4gICAgdGhpc1t0eXBlXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG5cbiAgX3Bvc2l0aW9uSG9yaXpvbnRhbChsZWZ0LCByaWdodCwgYXJyb3dMZWZ0KSB7XG4gICAgbGV0IHRvb2x0aXAgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwJyk7XG4gICAgbGV0IGFycm93ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCAuYXJyb3cnKTtcblxuICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGxlZnQ7XG4gICAgdG9vbHRpcC5zdHlsZS5yaWdodCA9IHJpZ2h0O1xuICAgIGFycm93LnN0eWxlLmxlZnQgPSBhcnJvd0xlZnQgKyAncHgnO1xuICB9XG4gIF9wb3NpdGlvblZlcnRpY2FsKHRvb2x0aXBUb3AsIHJvdGF0aW9uLCB0b3AsIGJvdHRvbSkge1xuICAgIGxldCB0b29sdGlwID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCcpO1xuICAgIGxldCBhcnJvdyA9IHRoaXMucXVlcnlTZWxlY3RvcignLnRvb2x0aXAgLmFycm93Jyk7XG5cbiAgICB0b29sdGlwLnN0eWxlLnRvcCA9IHRvb2x0aXBUb3AgKyAncHgnO1xuICAgIGFycm93LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIHJvdGF0aW9uICsgJ2RlZyknO1xuICAgIGFycm93LnN0eWxlLm1zVHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgcm90YXRpb24gKyAnZGVnKSc7XG4gICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgcm90YXRpb24gKyAnZGVnKSc7XG4gICAgYXJyb3cuc3R5bGUudG9wID0gdG9wO1xuICAgIGFycm93LnN0eWxlLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuICBfc2V0VG9vbHRpcFBvc2l0aW9uKCkge1xuICAgIGxldCB0YXJnZXRTaXplO1xuICAgIGlmKFBvbHltZXIuZG9tKHRoaXMucXVlcnlTZWxlY3RvcignLnR0LWxhYmVsJykpLm5vZGUuJCkgLy9pZiB0aGUgY29udGVudCBpcyBhIGNvbXBvbmVudCBvciBub3RcbiAgICAgIHRhcmdldFNpemUgPSBQb2x5bWVyLmRvbSh0aGlzLnF1ZXJ5U2VsZWN0b3IoJy50dC1sYWJlbCcpKS5ub2RlLmNoaWxkcmVuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGVsc2UgdGFyZ2V0U2l6ZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnR0LWxhYmVsJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHRvb2x0aXBTaXplID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBjZW50ZXIgPSB0YXJnZXRTaXplLmxlZnQgKyAodGFyZ2V0U2l6ZS53aWR0aCAvIDIpO1xuXG4gICAgaWYoKHRvb2x0aXBTaXplLndpZHRoIC8gMikgPiAoY2VudGVyIC0gMjApKSAvLyByaWVudHJhIGEgc2luaXN0cmFcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSG9yaXpvbnRhbCgnMjBweCcsICdhdXRvJywgKGNlbnRlciAtIDI1KSk7XG4gICAgZWxzZSBpZigoY2VudGVyICsgdG9vbHRpcFNpemUud2lkdGggLyAyKSA+IHdpbmRvdy5pbm5lcldpZHRoIC0gMjApIC8vIHJpZW50cmEgYSBkZXN0cmFcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSG9yaXpvbnRhbCgnYXV0bycsICcyMHB4JywgKCh0b29sdGlwU2l6ZS53aWR0aCAtICh0YXJnZXRTaXplLndpZHRoIC8gMikpIC0gNSkpO1xuICAgIGVsc2UgdGhpcy5fcG9zaXRpb25Ib3Jpem9udGFsKChjZW50ZXIgLSAodG9vbHRpcFNpemUud2lkdGggLyAyKSkgKyAncHgnLCAnYXV0bycsICgodG9vbHRpcFNpemUud2lkdGggLyAyKSAtIDUpKTtcbiAgICBpZigodGFyZ2V0U2l6ZS5ib3R0b20gKyB0b29sdGlwU2l6ZS5oZWlnaHQpID4gd2luZG93LmlubmVySGVpZ2h0KSAvLyBhbGxpbmVhIHZlcnRpY2FsbWVudGVcbiAgICAgIHRoaXMuX3Bvc2l0aW9uVmVydGljYWwoKHRhcmdldFNpemUudG9wIC0gdG9vbHRpcFNpemUuaGVpZ2h0IC0gNSksICctMTM1JywgJ2F1dG8nLCAnLTVweCcpO1xuICAgIGVsc2UgdGhpcy5fcG9zaXRpb25WZXJ0aWNhbCgodGFyZ2V0U2l6ZS5ib3R0b20gKyA1KSwgJzQ1JywgJy01cHgnLCAnYXV0bycpO1xuICB9XG5cblxuICAvKi0tLS0tLS0tLS1cbiAgT0JTRVJWRVJTXG4gIC0tLS0tLS0tLS0qL1xuICBfb2JzZXJ2VmlzaWJpbGl0eShuZXd2LCBvbGR2KSB7XG4gICAgbGV0IGhpZGVUb29sdGlwID0gKGV2dCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGlkZVRvb2x0aXAuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGlmKG5ld3YpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoaWRlVG9vbHRpcC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyotLS0tLS0tLS0tXG4gIENPTVBVVEVEXG4gIC0tLS0tLS0tLS0qL1xuICBfY29tcHV0ZVRvb2x0aXBDbGFzcyh0eXBlLCB2aXNpYmxlKSB7XG4gICAgdmFyIGFyciA9IFsndG9vbHRpcCddO1xuICAgIGlmKHR5cGUpIGFyci5wdXNoKHR5cGUpO1xuICAgIGlmKHZpc2libGUpIGFyci5wdXNoKCd2aXNpYmxlJyk7XG4gICAgcmV0dXJuIGFyci5qb2luKCcgJyk7XG4gIH1cblxuXG5cbiAgLyotLS0tLS0tLS0tXG4gIFBVQkxJQ1xuICAtLS0tLS0tLS0tKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIC8vIFBvbHltZXIuZG9tLmZsdXNoKCk7XG5cbiAgICB0aGlzLl9zZXRUb29sdGlwUG9zaXRpb24oKTtcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwJykuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcCcpLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxuXG59XG5cblBvbHltZXIoVG9vbHRpcENsYWIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9vbHRpcC9zY3JpcHQuZXM2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);