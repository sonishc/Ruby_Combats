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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* eslint no-console:0 */\n// This file is automatically compiled by Webpack, along with any other files\n// present in this directory. You're encouraged to place your actual application logic in\n// a relevant structure within app/javascript and only use these pack files to reference\n// that code so it'll be compiled.\n//\n// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate\n// layout file, like app/views/layouts/application.html.erb\n\nconsole.log('Hello World from Webpacker');\n\nvar Chill = React.createClass({\n    displayName: \"Chill\",\n\n    render: function render() {\n        return React.createElement(\n            \"div\",\n            { \"class\": \"god\" },\n            React.createElement(\n                \"div\",\n                { \"class\": \"wrapper\" },\n                React.createElement(\n                    \"div\",\n                    { id: \"top\" },\n                    React.createElement(\n                        \"p\",\n                        { \"class\": \"chill\" },\n                        React.createElement(\n                            \"b\",\n                            null,\n                            \"V.R.3.3.3.\"\n                        )\n                    )\n                ),\n                React.createElement(\n                    \"div\",\n                    { \"class\": \"main\" },\n                    React.createElement(\n                        \"div\",\n                        { \"class\": \"mainElement\" },\n                        React.createElement(\"div\", { \"class\": \"elements\", id: \"TopLeft\" }),\n                        React.createElement(\"div\", { \"class\": \"elements\", id: \"TopRight\" }),\n                        React.createElement(\"div\", { \"class\": \"elements\", id: \"BottomLeft\" }),\n                        React.createElement(\"div\", { \"class\": \"elements\", id: \"BottomRight\" })\n                    )\n                ),\n                React.createElement(\n                    \"div\",\n                    { id: \"bottom\" },\n                    React.createElement(\n                        \"p\",\n                        { \"class\": \"chill\" },\n                        \"&copy Rostyslav Vakh \"\n                    )\n                )\n            )\n        );\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvamF2YXNjcmlwdC9wYWNrcy9hcHBsaWNhdGlvbi5qcz9lMjNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1jb25zb2xlOjAgKi9cbi8vIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGNvbXBpbGVkIGJ5IFdlYnBhY2ssIGFsb25nIHdpdGggYW55IG90aGVyIGZpbGVzXG4vLyBwcmVzZW50IGluIHRoaXMgZGlyZWN0b3J5LiBZb3UncmUgZW5jb3VyYWdlZCB0byBwbGFjZSB5b3VyIGFjdHVhbCBhcHBsaWNhdGlvbiBsb2dpYyBpblxuLy8gYSByZWxldmFudCBzdHJ1Y3R1cmUgd2l0aGluIGFwcC9qYXZhc2NyaXB0IGFuZCBvbmx5IHVzZSB0aGVzZSBwYWNrIGZpbGVzIHRvIHJlZmVyZW5jZVxuLy8gdGhhdCBjb2RlIHNvIGl0J2xsIGJlIGNvbXBpbGVkLlxuLy9cbi8vIFRvIHJlZmVyZW5jZSB0aGlzIGZpbGUsIGFkZCA8JT0gamF2YXNjcmlwdF9wYWNrX3RhZyAnYXBwbGljYXRpb24nICU+IHRvIHRoZSBhcHByb3ByaWF0ZVxuLy8gbGF5b3V0IGZpbGUsIGxpa2UgYXBwL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24uaHRtbC5lcmJcblxuY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIGZyb20gV2VicGFja2VyJyk7XG5cbnZhciBDaGlsbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogXCJDaGlsbFwiLFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgXCJjbGFzc1wiOiBcImdvZFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBcImNsYXNzXCI6IFwid3JhcHBlclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogXCJ0b3BcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiY2xhc3NcIjogXCJjaGlsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWLlIuMy4zLjMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBcImNsYXNzXCI6IFwibWFpblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcImNsYXNzXCI6IFwibWFpbkVsZW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiY2xhc3NcIjogXCJlbGVtZW50c1wiLCBpZDogXCJUb3BMZWZ0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJjbGFzc1wiOiBcImVsZW1lbnRzXCIsIGlkOiBcIlRvcFJpZ2h0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJjbGFzc1wiOiBcImVsZW1lbnRzXCIsIGlkOiBcIkJvdHRvbUxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImNsYXNzXCI6IFwiZWxlbWVudHNcIiwgaWQ6IFwiQm90dG9tUmlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGlkOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJjbGFzc1wiOiBcImNoaWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJmNvcHkgUm9zdHlzbGF2IFZha2ggXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9qYXZhc2NyaXB0L3BhY2tzL2FwcGxpY2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///82\n");

/***/ })

/******/ });