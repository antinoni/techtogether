import react from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/MainComponent";

<<<<<<< HEAD
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
=======
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
>>>>>>> a4ffc3010ef2deb87a3222b639502a77239da88b

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

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
