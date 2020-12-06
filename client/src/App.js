import react from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/MainComponent";

import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

//export default App;
