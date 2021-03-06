import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
