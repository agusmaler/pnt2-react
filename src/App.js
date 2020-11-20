import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NotasRouter } from "./routers/NotasRouter";
import { NavBar } from "./components/ui/NavBar";
import { store } from './store/store'
import { Provider } from "react-redux";

import "./App.css";


function App() {
  return (
    <Router>
      <Provider store={store}>
      <NavBar />
      <NotasRouter />
      </Provider>
    </Router>
  );
}

export default App;
