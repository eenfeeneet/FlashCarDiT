import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import { Collapse, Avatar, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitIcon from '@material-ui/icons/FullscreenExitRounded';
import PlayIcon from '@material-ui/icons/PlayCircleFilledWhite';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import FlashCard from '../flashcard/flashcard';
import DeckCards from '../deckcards/deckcards';
import CardFront from '../flashcard/cardfront';
import CardBack from '../flashcard/cardback';
import Dialog from '../dialog/dialog';

import { FlashCardContext } from '../../FlashCardContext';





const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        height: '100%',
    },

    cardcontent: {
        height: 'calc(100% - 72px - 90px)',
        textAlign: 'center'
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundImage: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)'
    },
}));

const Deck = ({deck}) => {
    const classes = useStyles();
    const [ , [ selectedDeck, setSelectedDeck ]] = useContext(FlashCardContext);
    const [expanded, setExpanded] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    const [currentDeck, setCurrentDeck] = useState({
        id: null,
        topic: null,
        user: null,
        category: [],
        cards: []
    });

    function handleViewDeck(){
        setSelectedDeck( ({ selected, deckId, sDeck }) => ({
            selected: !selected,
            deckId: null,
            sDeck: {}
        }))
    }
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    useEffect(() => {

        setCurrentDeck({
            id: deck.id,
            initials: deck.initials,
            username: deck.username,
            topic: deck.topic,
            category: deck.category,
            cards: deck.cards,
        })

    }, [deck] );

    return (
        <Card className={classes.card}>

            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {currentDeck.initials}
                    </Avatar>
                }
                action={
                    <IconButton
                        aria-label="settings"
                        onClick={(e) =>handleViewDeck() }

                    >
                        <ExitIcon style={{ fontSize: 35 }}/>
                    </IconButton>
                }
                title={currentDeck.topic}
                subheader="September 14, 2016"
            />



            <CardContent className={`overflow-auto ${classes.cardcontent}`} >

                <DeckCards   cards={currentDeck.cards}/>

            </CardContent>


            <CardActions>
                <IconButton className="mx-auto" onClick={handleClickOpenDialog} >
                    <PlayIcon variant="raised" style={{ fontSize: 50 }}/>
                </IconButton>
            </CardActions>

            <Dialog
                handleOpen={handleClickOpenDialog}
                handleClose={handleCloseDialog}
                stateOpen={openDialog}
                deck={currentDeck}
            />


        </Card>
    );
}

export default Deck;