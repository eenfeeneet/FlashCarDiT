import React, { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import { Collapse, Avatar, Typography, IconButton } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Chip from '@material-ui/core/Chip';

import { FlashCardContext } from '../../FlashCardContext';
import Deck from '../deck/deck';


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        margin: '20px',
        maxWidth: '75%',
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
            variant="outlined"
        />
    )
}

const DeckList = ({deck}) => {
    const classes = useStyles();
    const [[allDecks, setAllDecks], [ selectedDeck, setSelectedDeck ]] = useContext(FlashCardContext);
    const { decks } = allDecks
    const [expanded, setExpanded] = useState(false);
    const [currentDeck, setCurrentDeck] = useState({
        id: null,
        user: null,
        topic: null,
        category: []
    });



    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    function handleViewDeck( id){
        console.log("selected Deck ID is: ", id)

        setSelectedDeck( ({ selected, deckId, sDeck }) => ({
            selected: !selected,
            deckId: id,
            sDeck: decks.find( deck => deck.id === id)
        }))
    }

    useEffect(() => {
        console.log("All Decks  Updated")

        setCurrentDeck({
            id: deck.id,
            initials: deck.initials,
            username: deck.username,
            topic: deck.topic,
            category: deck.category
        })
    }, [selectedDeck] );



    return (

        <Card className={`mx-auto ${classes.card}`}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {currentDeck.initials}
                        </Avatar>
                    }
                    action={
                        <IconButton
                            aria-label="view"
                            onClick={() =>handleViewDeck(currentDeck.id) }
                        >
                            <FullscreenIcon style={{ fontSize: 50 }}/>
                        </IconButton>
                    }
                    title={currentDeck.username}
                />
                <CardContent>
                    <Typography component="div" align="center" color="textSecondary" gutterBottom>
                        <h2 className={classes.textSize}>{currentDeck.topic}</h2>
                    </Typography>

                </CardContent>


            <CardActions className="justify-content-center">
                {currentDeck.category.map((cat) => ( <CategoryChips key={cat} category={cat} /> ))}

            </CardActions>


        </Card>
    );
}

export default DeckList;