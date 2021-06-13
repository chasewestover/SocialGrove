import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
