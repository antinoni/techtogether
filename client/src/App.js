import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/MainComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  )}

export default App;
