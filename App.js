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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello coder"),
    React.createElement("h1", {}, "hello coder 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello coder 3"),
    React.createElement("h1", {}, "hello coder 4"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
