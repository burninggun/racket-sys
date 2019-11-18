import React from 'react';
import { Container, CssBaseline } from '@material-ui/core'
import {Route} from 'react-router-dom';
import Restring from './components/Restring'
import Navbar from './components/Navbar';
import Home from './components/Home';
import RacketInventory from './components/RacketInventory';
import Register from './components/Register'
import 'typeface-roboto';
function App() {
	return (
		<React.Fragment>
			<CssBaseline>
				<Navbar/>
				<Container>
					<Route exact path="/" component={Home} />
					<Route path="/stringing" component={Restring} />
					<Route path="/racket_inventory" component={RacketInventory}/>
					<Route path="/register" component={Register}/>
				</Container>

      		</CssBaseline>
    	</React.Fragment>
	);
}

export default App;
