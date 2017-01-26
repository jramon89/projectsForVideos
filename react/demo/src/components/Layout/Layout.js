import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
	render() {
		return(
			<div>
				<div>
					<ul>
						<li><Link to="/computers">Computers</Link></li>
						<li><Link to="/accessories">Accessories</Link></li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>


		);
	}
}
export default Layout;
