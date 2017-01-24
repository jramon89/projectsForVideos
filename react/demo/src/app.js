import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Computers from './containers/Computers/Computers';
import { addComputer } from './actions/actionsComputers';
const store = createStore(reducers);
store.dispatch(addComputer('HP'));
store.dispatch(addComputer('Mac'));
console.log('store', store.getState());
render (
	<Provider store={store}>
		<div>
			<Computers/>
		</div>
	</Provider>,
	document.getElementById('app')
);