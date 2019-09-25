import React, { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import { Collapse, Avatar, Typography, IconButton } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import SaveIcon from '@material-ui/icons/Save';

import { FlashCardContext } from '../../FlashCardContext';


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        maxWidth: '100%',
        height: '100%'
    },
    textSize: {
        fontSize: '200%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },

    avatar: {
        backgroundImage: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)',
    },
    chip: {
        margin: theme.spacing(1),
    },
}));

const CategoryChips = ({category}) => {
    const classes = useStyles();

    return(
        <Chip
            label={category}
            className={classes.chip}
            component="a"
            href="#chip"
            variant="outlined"
            clickable
        />
    )
}

const DeckList = ({deck}) => {
    const classes = useStyles();

    const [[allDecks, setAllDecks],,,,, [newDeck, setNewDeck], [ newCard, setNewCard ]] = useContext(FlashCardContext);

    const { id, initials, username, topic, category, cards } = newDeck

    useEffect(() => {

        console.log("Set New Deck")
        setNewDeck(({ id, initials, username, topic, category, cards }) => ({
            id: id,
            initials: 'MH',
            username: 'Mad Hatter',
            topic: topic,
            category: category,
            cards: cards
        }))

    }, [] );

    const handleSaveNewDeck = () => {
        setAllDecks(({decks}) => ({
            decks: [...decks, newDeck]
        }))
    };



    return (

        <Card className={`mx-auto ${classes.card}`}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {initials}
                        </Avatar>
                    }

                    title={username}
                />
                <CardContent>
                    <Typography component="div" align="center" color="textSecondary" gutterBottom>
                        <h2 className={classes.textSize}>{topic}</h2>
                    </Typography>
                    <Typography component="div" align="center" color="textSecondary" gutterBottom>
                        <h6 >{`Current FlashCards in Deck:  ${cards.length}`}</h6>
                    </Typography>
                </CardContent>


            <CardActions className="justify-content-center">
                {category.map((cat) => ( <CategoryChips key={cat} category={cat} /> ))}

            </CardActions>
            <CardActions disableSpacing>
                <IconButton className="mx-auto" onClick={handleSaveNewDeck}>
                  <SaveIcon style={{ fontSize: 50 }} />
                </IconButton>
            </CardActions>

        </Card>
    );
}

export default DeckList;