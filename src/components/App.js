import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import configureStore from "../store";
import Main from "./Main";

import "../assets/js";
import "../assets/styles/bootstrap.css";
import "../assets/styles/styles.sass";

const history = createBrowserHistory();

const store = configureStore();


const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Main} />
      </div>
    </Router>
  </Provider>
);

export default App;
