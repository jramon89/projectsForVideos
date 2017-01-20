import React from 'react';
import { render } from 'react-dom';
import Computers from './components/Categories/Computers';

render (
	<div>
		<Computers/>
	</div>,
	document.getElementById('app')
);