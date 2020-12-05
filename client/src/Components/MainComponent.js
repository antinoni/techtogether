import React from 'react';
import Login from './LoginComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			{/* new component pages to be added here */}
			<Route path="/login" component={Login} />
		</Switch>
	);
};