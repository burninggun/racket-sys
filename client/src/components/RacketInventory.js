import React from 'react';
import { Typography, List, ListItemText, ListItem, } from '@material-ui/core'

import string_data from '../dummy_files/rackets'

const racketMap = string_data.map( (item, index) => {
    return(
        <ListItem key={index} >
            <ListItemText primary={`${item.r_name}`} />
        </ListItem>
    )
} )

export default () => {
    console.log(racketMap)
    return(
        <React.Fragment>
            <Typography variant="h4" >Racket Inventory</Typography>
            <List>
                {racketMap}
            </List>
        </React.Fragment>
    )
}