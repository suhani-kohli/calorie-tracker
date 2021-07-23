import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFood from "./pages/AddFood";
import Diary from "./pages/Diary";
import NavPanel from "./pages/NavPanel";


function App() {
  return (
    <Router>
      <div className="app">
        <NavPanel />
        <Switch>
          <Route path="/addfood">
            <AddFood />
          </Route>
          <Route>
            <Diary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
