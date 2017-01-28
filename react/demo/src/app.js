import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Computers from './components/Categories/Computers/Computers';
import Laptops from './components/Categories/Computers/Laptops/Laptops';
import Accessories from './components/Categories/Accessories';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
render (

	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}/>
			<Route path="/computers" component={Computers}></Route>
			<Route path="/computers/:laptops" component={Laptops}></Route>
			<Route path="/accessories" component={Accessories}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
);