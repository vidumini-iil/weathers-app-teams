import { createElement } from 'react';

var styles = {"test":"_styles-module__test__3ybTi"};

const getCities = () => {
  console.log("Hello World");
  return "Hello";
};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "test : ", text);
};

export { ExampleComponent, getCities };
//# sourceMappingURL=index.modern.js.map
