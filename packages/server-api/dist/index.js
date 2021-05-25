var React = require('react');

var styles = {"test":"_styles-module__test__3ybTi"};

var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
var _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";

var getCities = function getCities() {
  console.log("Hello World");
  return "Hello";
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "test : ", text);
};

exports.ExampleComponent = ExampleComponent;
exports.getCities = getCities;
//# sourceMappingURL=index.js.map
