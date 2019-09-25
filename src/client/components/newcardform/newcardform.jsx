import React, { Fragment, useState, useEffect, useContext } from 'react';

import { FlashCardContext } from '../../FlashCardContext';

import { makeStyles } from '@material-ui/core/styles';

import { TextField, Button } from '@material-ui/core';





const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formContainer: {
        // marginTop: theme.spacing(4),
        alignItems: 'center',
        width: '75%',
        height: '100%',
        margin: 'auto',
        alignSelf: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
}));




const NewCardForm = () => {
    const classes = useStyles();
    const [[allDecks, setAllDecks],,,[isCardCreated, setIsCardCreated],, [newDeck, setNewDeck], [ newCard, setNewCard ]] = useContext(FlashCardContext);
    const { id, front, back } = newCard

    const { decks } = allDecks
    const [ cardId, setCardId ] = useState(1);
    const [ clearInput, setClearInput ] = useState();

    const { cards } = newDeck



    function getId(){

        const deckLength = flashCard.decks.length
        return deckLength + 1
    }

    function handleFrontInputChange() {
        console.log(event.target.value)
        const uInput = event.target.value
        console.log(newDeck)
        setNewCard(({back}) => ({
            id: cardId,
            front: uInput,
            back: back
        }))
    }

    function handleBackInputChange(event) {
        console.log(event.target.value)
        const uInput = event.target.value
        setNewCard(({front}) => ({
            id: cardId,
            front: front,
            back: uInput
        }))
    }

    function handleCreate(){
        setIsCardCreated({isCardCreated: true})
        const uFront = newCard.front
        const uBack = newCard.back
        console.log(uFront)
        console.log(uBack)
        const addNewCard = {
            id: cardId,
            front: uFront,
            back: uBack,
        }

        setNewDeck(({ id, topic, category, cards }) => ({
            id: id,
            topic: topic,
            category: category,
            cards: [...cards, addNewCard]
        }))
        setCardId(prevCardId => prevCardId + 1);
    }


    useEffect(() => {
        const { cards } = newDeck
        const { id, front, back } = newCard

        console.log("new cards id: ",id)
        console.log("new cards front: ",front)
        console.log("new cards back: ",back)

        console.log("new deck cards: ",cards)
    }, [newCard, newDeck]);


    return(
        <Fragment>
            <div className="input-group mb-5 mx-auto w-75">
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Front Side of Card"
                    onChange={handleFrontInputChange}
                    autoFocus
                />
            </div>

            <div className="input-group mb-5 mx-auto w-75">
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Back Side of Card"
                    onChange={handleBackInputChange}
                    autoFocus
                />
            </div>
            <div className="input-group-prepend my-5 mx-auto w-25">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => handleCreate()}
                >
                    Add Card
                </Button>
            </div>
        </Fragment>

    );
}

export default NewCardForm;