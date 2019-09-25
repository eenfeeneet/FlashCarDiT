import React, { Fragment, useState, useContext, useEffect } from 'react';

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




const NewDeckForm = () => {
    const classes = useStyles();
    const [[allDecks, setAllDecks],,,, [isDeckCreated, setIsDeckCreated], [newDeck, setNewDeck]] = useContext(FlashCardContext);

    const { decks } = allDecks




    function getId(){
        const deckLength = decks.length
        return deckLength + 1
    }

    function handleTopicInputChange(event) {
        console.log(event.target.value)
        const uTopicInput = event.target.value
        setNewDeck(({category}) => ({
            topic: uTopicInput,
            category: category
        }))
    }

    function handleCategorySelectChange(event) {
        console.log(event.target.value)
        const uCatInput = event.target.value
        setNewDeck(({topic, category}) => ({
            topic: topic,
            category: [...category, uCatInput],
        }))
    }

    function handleCreate(){
        setIsDeckCreated(true)
        console.log("Created New Deck")

       setNewDeck(({ initials, username, topic, category, cards }) => ({
            id: getId(),
            initials: null,
            username: null,
            topic: topic,
            category: category,
            cards: []
        }))
    }



    useEffect(() => {
        const { id, initials, username, topic, category, cards } = newDeck
        console.log("new deck topic: ",topic)
        console.log("new deck category: ",category)
    }, [newDeck]);

    return(
        <Fragment>
            <div className="input-group mb-5 mx-auto w-75">
                <TextField
                    variant="outlined"
                    className="mt-2"
                    required
                    fullWidth
                    label="Topic for FlashCards"
                    onChange={handleTopicInputChange}
                    autoFocus
                />
            </div>
            <div className="input-group-prepend my-5 mx-auto w-75">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                <select className="custom-select" onChange={handleCategorySelectChange} id="inputGroupSelect01">
                    <option value="others">Choose...</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                </select>
            </div>

            <div className="input-group-prepend my-5 mx-auto w-25">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isDeckCreated}
                    className={`mt-2 ${classes.submit}`}
                    onClick={() => handleCreate()}
                >
                    Create
                </Button>
            </div>
        </Fragment>

    );
}

export default NewDeckForm;