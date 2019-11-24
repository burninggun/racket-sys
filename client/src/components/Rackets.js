import React from 'react';
import {  Grid, FormControl, TextField, makeStyles, Button } from '@material-ui/core'
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
    const [form, setForm] = React.useState("")
    const [error, setError] = React.useState({
        show: false,
        text: ""
    })


    const createNewModel = () => {

        if(form === ""){
            setError({
                show: true,
                text: "Form cannot be blank"
            })
        } else {
            axios.post('/racket/new', form).then(res => {
                console.log(res);
            })
        }

    

    }


    const handleKeyDown = event => {
        if(event.target.value.length !== ""){
            setError({
                show: false,
                text:""
            })
        }
        console.log(event.target.value)
        setForm(event.target.value)
    }

    return(
        <React.Fragment>
            <Grid container justify="center" >
                <FormControl className={classes.formControl} >
                    <TextField
                        id="r_name"
                        label="Racket Model Name"
                        error={error.show}
                        helperText={error.text}
                        value={form}
                        onChange={handleKeyDown}
                    />
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <Button variant="outlined" onClick={createNewModel} >Hello</Button>
            </Grid>
        </React.Fragment>
    )
}