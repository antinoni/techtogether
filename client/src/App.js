import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/MainComponent";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/ProfileComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <Main />
      </div>
    </Router>
  );
}

export default App;
