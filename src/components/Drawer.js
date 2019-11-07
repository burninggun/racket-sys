import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    },
    textDecor: {
        textDecoration: "none",
        color: "black"
    }
}))

export default () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    })

    const toggleDrawer = open  => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({open})
    }

    const SideList = ()=> (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
            <List>
                <Link className={classes.textDecor} to="/stringing" >
                    <ListItem button  key="string" >
                        <ListItemText primary="string" />
                    </ListItem>
                </Link>
            </List>
            <Divider></Divider>
        </div>
    )

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} >
                <MenuIcon/>
            </IconButton>
            <Drawer open={state.open} onClose={toggleDrawer(false)} >
                <SideList/>
            </Drawer>
        </React.Fragment>
    )
}