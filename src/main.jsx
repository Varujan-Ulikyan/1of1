import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Store from './store/store';
import App from "./App";
import "./index.css";


const store = new Store()
export const Context = createContext({
  store
})
ReactDOM.createRoot(document.getElementById("root")).render(
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
);
