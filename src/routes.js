import React from 'react';
import { Route } from 'react-router';

// import App from './App';
import OperandScreen from './components/OperandScreen';
import OperatorScreen from './components/OperatorScreen';
import { BrowserRouter } from 'react-router-dom';

export default (
	<BrowserRouter>
		<Route exact path="/" component={OperandScreen} />
		<Route path="/step-2" component={OperatorScreen} />
	</BrowserRouter>
);