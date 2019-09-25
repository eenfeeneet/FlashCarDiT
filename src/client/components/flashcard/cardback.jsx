import React, { useState, useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    cardBack: {
        minWidth: 275,
        width: '75%',
        height: '125px',
        backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
    },

    textBack: {
        // fontSize: 14,
    },

}));
const CardBack = ({content}) => {

    const classes = useStyles();

    return (
        <Card className={`mx-auto my-2 ${classes.cardBack}`} >
            <CardContent>
                <Typography component="div" align="center" color="textSecondary" gutterBottom>
                    <h3 className={classes.textBack}>{content}</h3>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardBack;