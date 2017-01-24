import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ComputersResultList from '../../components/Categories/Computers';

class ComputersResult extends Component{
	static propTypes = {
		computers: PropTypes.array
	}

	render() {
		return (
			<ComputersResultList computers={this.props.computers}/>
		);
	}
}

function mapStateToProps(state){
	return {computers: state.computers}
}

const computersContainer = connect(mapStateToProps)(ComputersResult);
export default computersContainer;
