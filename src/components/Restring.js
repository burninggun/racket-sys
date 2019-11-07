import React from 'react';
import {  Grid, FormControl, InputLabel, Input, makeStyles, Button } from '@material-ui/core'


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
        [theme.breakpoints.down('xs')]: {
            // justifyContent: "center",
            flexDirection: 'column'
        }
    }
}))

export default function Restring() {
    const classes = useStyles()
    const [form, setForm] = React.useState({
        r_name: '',
        s_name: '',
        s_tension: '',
        cust_fname: '',
        cust_lname: '',
        cust_phone: '',
    })

    const handleKeyDown = event => {
        console.log(event.target.id)
        setForm({...form, [event.target.id]: event.target.value})
    }

    return(
        <React.Fragment>
            <Grid className={classes.grid} >
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="r_name" >Racket Name</InputLabel>
                    <Input id="r_name" value={form.r_name} onChange={handleKeyDown}/>
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="s_name">String Name</InputLabel>
                    <Input id="s_name" value={form.s_name} onChange={handleKeyDown} />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="s_tension">Tension (lb)</InputLabel>
                    <Input type="number" id="s_tension" value={form.s_tension} onChange={handleKeyDown} />
                </FormControl>

            </Grid>
            <Grid className={classes.grid} >
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust_fname" >Customer First Name</InputLabel>
                    <Input id="cust_fname" value={form.cust_fname} onChange={handleKeyDown} />
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust_lname">Customer Last Name</InputLabel>
                    <Input id="cust_lname" value={form.cust_lname} onChange={handleKeyDown} />
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust_phone">Customer Phone</InputLabel>
                    <Input type="number" id="cust_phone" value={form.cust_phone} onChange={handleKeyDown} />
                </FormControl>
            </Grid>
            <Grid container justify="center" >
                <Grid item>
                    <Button className={classes.button} variant="contained" >Next</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

// export default restring