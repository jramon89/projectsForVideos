import React, { Component, PropTypes } from 'react';

class Computers extends Component {
	static propTypes = {
		computers: PropTypes.array
	}

	render() {
		console.log('props', this.props.computers);
		return (
			<h1>Finish with react + redux basic config </h1>
		);
	}

}
export default Computers;
