import React from 'react';
import { Container, CssBaseline } from '@material-ui/core'
import {Route} from 'react-router-dom';
import Restring from './components/Restring'
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'typeface-roboto';
function App() {
	return (
		<React.Fragment>
			<CssBaseline>
				<Navbar/>
				<Container>
					<Route exact path="/" component={Home} />
					<Route path="/stringing" component={Restring} />
				</Container>

      		</CssBaseline>
    	</React.Fragment>
	);
}

export default App;
