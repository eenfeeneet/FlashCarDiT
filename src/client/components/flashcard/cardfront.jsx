import React, { useState, useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    cardFront: {
        minWidth: 275,
        width: '75%',
        height: '125px',
        backgroundImage: 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
    },

    textFront: {
        fontSize: '150%',
    },

}));
const CardFront = ({content}) => {

    const classes = useStyles();

    return (
        <Card className={`mx-auto my-2 ${classes.cardFront}`} >
            <CardContent>
                <Typography component="div" align="center" color="textSecondary" gutterBottom>
                    <h3 className={classes.textFront}>{content} </h3>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardFront;