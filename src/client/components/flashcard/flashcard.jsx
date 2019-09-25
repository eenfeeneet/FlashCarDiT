import React, { useState, useContext, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Fab } from '@material-ui/core';
import FlipToBack from '@material-ui/icons/FlipToBackRounded';
import FlipToFront from '@material-ui/icons/FlipToFrontRounded';

import { FlashCardContext } from '../../FlashCardContext';
import CardFront from '../flashcard/cardfront';
import CardBack from '../flashcard/cardback';

const useStyles = makeStyles(theme =>({
    cardFront: {
        minWidth: 275,
        width: '75%',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
    },
    cardBack: {
        minWidth: 275,
        width: '75%',
        height: '125px',
        backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
    },
    cardContent: {
        height: '70%'
    },
    textFront: {
        fontSize: '200%',
    },
    textBack: {
        fontSize: '200%',
    },
    pos: {
        marginBottom: 12,
    },
}));
const FlashCard = ({contentFront, contentBack}) => {
    const classes = useStyles();

    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(e) {
        // e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{height: '90%'}}>

            <Card className={`mx-auto my-2 h-100 ${classes.cardFront}`}  key="front">

                <CardContent className={classes.cardContent}>
                    <Typography component="div" color="textSecondary" className="h-100 d-flex justify-content-center align-items-center" gutterBottom>
                        <h3 className={classes.textFront}>{contentFront} </h3>
                    </Typography>
                </CardContent>

                <CardActions>
                    <Fab onClick={() => handleClick()} color="primary" className="mx-auto">
                        <FlipToBack />
                    </Fab>
                </CardActions>
            </Card>


            <Card className={`mx-auto my-2 h-100 ${classes.cardBack}`} key="back" >

                <CardContent className={classes.cardContent}>
                    <Typography component="div" color="textSecondary" className="h-100 d-flex justify-content-center align-items-center" gutterBottom>
                        <h3 className={classes.textBack}>{contentBack}</h3>
                    </Typography>

                </CardContent>

                <CardActions>
                    <Fab onClick={() => handleClick()} color="primary" className="mx-auto">
                        <FlipToFront />
                    </Fab>
                </CardActions>

            </Card>

        </ReactCardFlip>
    )
}

export default FlashCard;