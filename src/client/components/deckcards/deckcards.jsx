import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import { Collapse, Avatar, Typography, IconButton } from '@material-ui/core';

import { List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import CardFront from '../flashcard/cardfront';
import CardBack from '../flashcard/cardback';

import { FlashCardContext } from '../../FlashCardContext';





const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        height: '100%',
    },

    cardcontent: {
        height: 'calc(100% - 72px - 90px)',
        textAlign: 'center',
    },
    textSize: {
        fontSize: '10%%'
    },
    avatar: {
        backgroundImage: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)'
    },
}));

const CardsList = ({cards}) => {
    const classes = useStyles();
    const [ ,[ selectedDeck, setSelectedDeck ],[ selectedCard, setSelectedCard ] ] = useContext(FlashCardContext);
    const { selected, deckId, sDeck } = selectedDeck

    const handleSelectCard = ( id) => {
        console.log("selected card ID is: ", id)
        setSelectedCard( (prevState) => ({
            selected: prevState.selected,
            deckId: prevState.deckId,
            cardId: id,
            sCard: sDeck.cards.find( card => card.id === id)
        }))
    };


    return (
        <Card className={`p-2 ${classes.card}`}>
            <CardHeader title="Flash Cards"/>
            <div className="h-100 overflow-auto">
                <List component="nav" dense={false}>
                    {cards.map( ({ id }) => (
                        <ListItem
                            key={id}
                            button

                            onClick={event => handleSelectCard( id)}
                        >

                            <ListItemText primary={`Card ${id}`} />

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>

                        </ListItem>
                    ))}

                </List>
            </div>
        </Card>
    );
}
const CardsDetails = () => {
    const classes = useStyles();
    const [ ,,[ selectedCard, setSelectedCard ] ] = useContext(FlashCardContext);
    const { sCard } = selectedCard
    const [currentCard, setCurrentCard] = useState({
        id: null,
        front: null,
        back: null
    })


    useEffect(() => {
        console.log("Set Current Card")
        const { sCard } = selectedCard
        setCurrentCard({
            id: sCard.id,
            front: sCard.front,
            back: sCard.back
        })
    }, [selectedCard] );

    return (
        <Card className={`p-2 ${classes.card}`}>
            <CardContent className={`overflow-auto ${classes.textSize}`} >
                <h5>Front</h5>
                <CardFront content={currentCard.front} className="my-4"/>
                <h5>Back</h5>
                <CardBack content={currentCard.back} className="my-4"/>
            </CardContent>
        </Card>
    );
}



const DeckCards = ({ cards}) => {
    const classes = useStyles();
    const [currentDeckCards, setCurrentDeckCards] = useState({
        deckId: null,
        cards: [],
    })

    const [ ,[ selectedDeck, setSelectedDeck ],[ selectedCard, setSelectedCard ] ] = useContext(FlashCardContext);
    const { selected, deckId, sDeck } = selectedDeck

    useEffect(() => {
        const { selected, deckId, sDeck } = selectedDeck

        console.log("Set Current Deck")
        setCurrentDeckCards({
            deckId: deckId,
            cards: sDeck.cards,
        })

    }, [selectedDeck] );

    useEffect(() => {
        console.log("Set Selected Card")
        const {  deckId, sDeck } = selectedDeck
        console.log(sDeck.cards)
        setSelectedCard( ({ selected, cardId}) => ({
            selected: !selected,
            deckId: deckId,
            cardId: 1,
            sCard: sDeck.cards.find( card => card.id === 1 )
        }))

    }, [] );


    console.log("==================================================")
    console.log("DeckCards Selected: ", selectedCard.selected)
    if(selectedCard.selected){
        console.log("Deck ID of Card: ", selectedCard.deckId)
        console.log("Card ID: ", selectedCard.cardId)
        console.log(selectedCard.sCard)
    }
    console.log("==================================================")



    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-3 h-100 my-2">
                   <CardsList cards={currentDeckCards.cards} />
                </div>

                <div className="col-lg h-100 my-2">
                    <CardsDetails />
                </div>
            </div>
        </div>

    );
}

export default DeckCards;