import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/MainComponent";
import Nav from "./components/NavComponent";
import Profile from "./components/ProfileComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
