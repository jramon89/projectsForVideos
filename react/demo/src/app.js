import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout/Layout';
import Computers from './components/Categories/Computers';
import Accessories from './components/Categories/Accessories';
import { Router, Route, hashHistory } from 'react-router';
render (

	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="/computers" component={Computers}></Route>
			<Route path="/accessories" component={Accessories}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
);