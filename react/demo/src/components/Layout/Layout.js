import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Home from '../Home/Home';
class Layout extends Component {
	render() {
		return(
			<div>
				<div>
					<ul>
						<li><IndexLink to="/">Home</IndexLink></li>
						<li>
							<Link to="/computers" activeStyle={{color:'red'}}>Computers</Link>
							<ul>
								<li>
									<Link to="/computers/laptops" activeStyle={{color:'green'}}>Laptops</Link>
								</li>
							</ul>
						</li>
						<li><Link to="/accessories" activeStyle={{color:'orange'}}>Accessories</Link></li>
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
