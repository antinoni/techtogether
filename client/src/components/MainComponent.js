import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./LoginComponent";
import Signup from "./SignupComponent";
import Profile from "./ProfileComponent";
import NewPost from "./NewPostComponent";
import Board from "./BoardComponent";
import Post from "./PostComponent";
import ProfileSettings from "./ProfileSettingsComponent";
import ProfileArchive from "./ProfileArchiveComponent";

function Main({ isAuthenticated, user }) {
  return (
    <Router>
      {isAuthenticated}
      <Routes />
    </Router>
  );
}

const Routes = () => {
  return (
    <Switch>
      {/* new component pages to be added here */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/newpost" component={NewPost} />
<<<<<<< HEAD
=======
      <Route path="/profilesettings" component={ProfileSettings} />
>>>>>>> d40614887ddadd0da2996abd98da9037bd3bb7f6
      <Route path="/profilearchive" component={ProfileArchive} />
      <Route path="/profilesettings" component={ProfileSettings} />
      <Route path="/board" component={Board} />
<<<<<<< HEAD
      <Route path="/post" component={Post} />
=======
			<Route path="/post" component={Post} />
>>>>>>> d40614887ddadd0da2996abd98da9037bd3bb7f6
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default Main;
