import React from 'react';
import { Typography, List, ListItemText, ListItem, Divider} from '@material-ui/core'

import string_data from '../dummy_files/rackets'

const racketMap = string_data.map( (item, index) => {
    const conditional_divider = (index + 1 !== string_data.length) ? <Divider/> : null
    return(
        <React.Fragment key={index}>
            <ListItem >
                <ListItemText primary={`${item.r_name}`} />
            </ListItem>
            {conditional_divider}
        </React.Fragment>
    )
} )

export default () => {
    return(
        <React.Fragment>
            <Typography variant="h4" >Racket Inventory</Typography>
            <List>
                {racketMap}
            </List>
        </React.Fragment>
    )
}