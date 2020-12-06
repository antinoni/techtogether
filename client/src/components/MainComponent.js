import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import Profile from "./ProfileComponent";
import NewPost from "./NewPostComponent";
import Board from "./BoardComponent";


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
			<Route path="/board" component={Board} />
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default Main;
