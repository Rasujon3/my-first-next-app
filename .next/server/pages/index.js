(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\JM-Batch-5\\projects\\13.Intermediate-Level-React\\my-first-next-app\\pages\\index.js";

async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const json = await res.json();
  return {
    props: {
      countryList: JSON.stringify(json)
    }
  };
}

class index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: this.props.countryList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LW5leHQtYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1maXJzdC1uZXh0LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIiwiY291bnRyeUxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5kZXgiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxlQUFlQSxrQkFBZixHQUFvQztBQUN6QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG9DQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmO0FBQWY7QUFERixHQUFQO0FBR0Q7O0FBRUQsTUFBTUssS0FBTixTQUFvQkMsNENBQXBCLENBQThCO0FBQzVCQyxRQUFNLEdBQUc7QUFDUCx3QkFBTztBQUFBLGdCQUFNLEtBQUtOLEtBQUwsQ0FBV0M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBSDJCOztBQU05QiwrREFBZUcsS0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsXCIpO1xyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBjb3VudHJ5TGlzdDogSlNPTi5zdHJpbmdpZnkoanNvbikgfSxcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY291bnRyeUxpc3R9PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=