// const element = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "mainHeading",
//   },
//   "hello coolcoder"
// );

{
  /* <div id="parent">
  <div id="child">
    <h1>hello coder</h1>
    <h1>hello coder 2</h1>
  </div>

  <div id="child2">
    <h1>hello coder3</h1>
    <h1>hello coder 4</h1>
  </div>
</div>; */
}

import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1", { id: "heading" }, "pathlogics");
// console.log(element);
let elem = (
  <h2>
    <span>Im react</span> element
  </h2>
);
const JsxHeading = () => {
  return (
    <h1 id="heading">
      {elem}
      pathlogics
    </h1>
  );
}; //this is the react element

const JsxElement = <h1 id="heading">pathlogics222</h1>; //jsx element
console.log(JsxHeading);

//React Component
//class based component => old practice
//functional based component =>new practice

const HeadingComponent = () => {
  //this is the react functional component
  //component composition ==> injecting the one component to another component is called as "component composition"
  return (
    //we can write any js code inside the jsx using curly braces {}
    <div>
      {/* <JsxHeading /> */}
      {/* {JsxHeading()} */}
      {/* <JsxHeading></JsxHeading> */}
      <h1>Hello functional component</h1>
    </div>
  );
};
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<HeadingComponent />);
// rootElement.render(<JsxHeading />);
