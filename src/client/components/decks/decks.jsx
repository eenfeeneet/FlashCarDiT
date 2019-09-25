import React, { useState, useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { FlashCardContext } from '../../FlashCardContext';

import DeckList from '../decklist/decklist';
import Deck from '../deck/deck';



const useStyles = makeStyles(theme => ({

    containerlist: {
        height: '100%',
        padding: theme.spacing(3),
    },
    paper: {
        height: '100%',
        backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        // backgroundColor: '#ffffff',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        // border: '1px solid #B2B2B2',
        padding: theme.spacing(5),
        overflow: 'auto',
    },
    gridList: {
    width: '100%',
    height: '100%',
  },
}));


const Decks = () => {
    const classes = useStyles();
    const [[allDecks, setAllDecks], [ selectedDeck, setSelectedDeck ]] = useContext(FlashCardContext);

    const { decks } = allDecks
    const { selected, deckId, sDeck } = selectedDeck


    // useEffect(() => {
    //     const { decks } = allDecks
    //     console.log("=============================")
    //     console.log("Flash Card Decks in State: ", decks.length)
    //     console.log(decks)
    //     console.log("=============================")

    // }, [allDecks] );

    // useEffect(() => {
    //     const { selected, deckId, sDeck } = selectedDeck


    //     console.log("=============================")
    //     console.log("Deck Selected: ", selected)
    //     if(selected) {
    //         console.log("Deck ID: ", deckId)
    //         console.log(sDeck)
    //     }
    //     console.log("=============================")


    // }, [selectedDeck] );


    return(
        <Container className={classes.containerlist} >
            <Paper elevation={24} className={classes.paper} >
                <div className="container-fluid h-100">
                    {selectedDeck.selected ?
                        (
                            <Deck deck={sDeck} />
                        ) : (
                            decks.map((deck ) => (
                                <DeckList key={deck.id} deck={deck} />
                            ))
                        )
                    }
                </div>
            </Paper>
        </Container>
    );
}

export default Decks;