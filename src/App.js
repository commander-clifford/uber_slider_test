import React, { Component } from 'react';
import Main from './components/main.js';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {

	render() {
		return (

			<div>
				<nav>
					<ul>
						<li><Link to='/1'>1</Link></li>
						<li><Link to='/2'>2</Link></li>
						<li><Link to='/3'>3</Link></li>
					</ul>
				</nav>
				<Main />
			</div>


		);
	}
}

export default App;
