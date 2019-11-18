import React from 'react';
import { Grid, Input, InputLabel, FormControl, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(1),
        
    },
}))

export default () => {
    const styles = useStyles()
    return(
        <React.Fragment>
            <Grid container justify="center" >
                <FormControl className={styles.formControl} >
                    <InputLabel htmlFor="username">Desired Username</InputLabel>
                    <Input id="username" />
                </FormControl>
                <FormControl className={styles.formControl} >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" />
                </FormControl>
                <FormControl className={styles.formControl} >
                    <InputLabel htmlFor="passwordconfirm">Confirm Password</InputLabel>
                    <Input id="passwordconfirm" />
                </FormControl>
            </Grid>
            <Grid container justify="center" >
                <Grid item >
                    <Button className={styles.button} variant="contained">Create Account</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}