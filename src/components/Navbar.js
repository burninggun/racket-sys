import React from 'react';
import { AppBar,Toolbar, makeStyles, Typography, Button} from '@material-ui/core';
import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1
    },
    hero: {
        marginTop: theme.spacing(1),
    },
    heroContent: {
        padding: theme.spacing(3)
    },
    offset: theme.mixins.toolbar
    
}))

export default () => {
    const classes = useStyles()
    return(
        <React.Fragment>
            <AppBar position="fixed" >
            <Toolbar className={classes.toolbar} >
                <Drawer/>
                {/* <IconButton >
                    <MenuIcon/>
                </IconButton> */}
                <Typography component="h2" variant="h5" align="center" className={classes.toolbarTitle}>Queue</Typography>
                <Button variant="outlined" >Login</Button>

            </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </React.Fragment>
    )
}