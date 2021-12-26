"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Facebook({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1c7QUFDM0NFLG9EQUF3QjtBQUN4QixpRUFBZUYsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3pCLEVBQWlEO0lBQy9DSSxTQUFTLEVBQUUsQ0FBQztRQUNWSCxtRUFBa0IsQ0FBQyxDQUFDO1lBQ2xCSyxRQUFRLEVBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0I7WUFDdkNDLFlBQVksRUFBQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtRQUNqRCxDQUFDO0lBRUQsQ0FBQztBQUNMLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmJjbG9uZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbi8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XHJcbiAgICAgIGNsaWVudElkOnByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OnByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIC8vLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICAgIF0sXHJcbn0pOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsInJlcXVpcmUiLCJjb25maWciLCJwcm92aWRlcnMiLCJGYWNlYm9vayIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();