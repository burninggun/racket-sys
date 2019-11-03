import React from 'react';
import { Container, CssBaseline, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1)
	}
}))

function App() {
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline>
				<Container>

					<FormControl className={classes.formControl} >
						<InputLabel htmlFor="r-name" >Racket Name</InputLabel>
						<Input id="r-name" />
          			</FormControl>

					<FormControl className={classes.formControl} >
						<InputLabel htmlFor="s-name">String Name</InputLabel>
						<Input id="s-name"/>
					</FormControl>

					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="s-tension">Tension (lb)</InputLabel>
						<Input id="s-tension"/>
					</FormControl>

					<FormControl className={classes.formControl} >
						<InputLabel htmlFor="cust-fname" >Customer First Name</InputLabel>
						<Input id="cust-fname"/>
					</FormControl>

					<FormControl className={classes.formControl} >
						<InputLabel htmlFor="cust-lname">Customer Last Name</InputLabel>
						<Input id="cust-lname"/>
					</FormControl>

					<FormControl className={classes.formControl} >
						<InputLabel htmlFor="cust-phone">Customer Phone</InputLabel>
						<Input id="cust-phone"/>
					</FormControl>

        		</Container>
      		</CssBaseline>
    	</React.Fragment>
	);
}

export default App;
