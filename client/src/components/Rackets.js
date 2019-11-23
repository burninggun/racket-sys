import React from 'react';
import {  Grid, FormControl, InputLabel, Input, makeStyles, Button } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
	formControl: {
        margin: theme.spacing(1),

    },
    button: {
        margin: theme.spacing(1),
        
    },
    grid: {
        display: "flex",
        justifyContent: "center",
    }
}))


export default () => {
    const classes = useStyles()
    const [form, setForm] = React.useState({
        r_name: '',
    })
    const createNewModel = async () => {
        axios.post('/racket/new', form).then(res => {
            console.log(res);
        })
    }

    const handleKeyDown = event => {
        console.log(event.target.id)
        setForm({...form, [event.target.id]: event.target.value})
    }

    return(
        <React.Fragment>
            <Grid container justify="center" >
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="r_name" >Racket Name</InputLabel>
                    <Input id="r_name" value={form.r_name} onChange={handleKeyDown}/>
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <Button variant="outlined" onClick={createNewModel} >Hello</Button>
            </Grid>
        </React.Fragment>
    )
}