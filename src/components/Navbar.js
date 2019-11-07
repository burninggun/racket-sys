import React from 'react';
import { AppBar,Toolbar, makeStyles, Typography, Button} from '@material-ui/core';
import Drawer from './Drawer'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1,
        cursor: "pointer"
    },
    hero: {
        marginTop: theme.spacing(1),
    },
    heroContent: {
        padding: theme.spacing(3)
    },
    offset: theme.mixins.toolbar
    
}))

export default withRouter((props) => {
    console.log(props)
    const classes = useStyles()
    const redirectHome = () => {
        props.history.push('/')
    }

    return(
        <React.Fragment>
            <AppBar position="fixed" >
            <Toolbar className={classes.toolbar} >
                <Drawer/>
                    <Typography onClick={redirectHome} component="h2" variant="h5" align="center" className={classes.toolbarTitle}>Queue</Typography>
                <Button variant="outlined" >Login</Button>

            </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </React.Fragment>
    )
})