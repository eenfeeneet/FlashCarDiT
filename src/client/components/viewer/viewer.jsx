import React, { useContext, useState } from 'react';


import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Paper} from '@material-ui/core';


import { FlashCardContext } from '../../FlashCardContext';

import Carousel from 'react-bootstrap/Carousel'

import FlashCard from '../flashcard/flashcard';


const useStyles = makeStyles(theme => ({
    container: {
        // height: 'auto',
        height: '100%',
        padding: theme.spacing(3),
    },
    paper: {
        height: '100%',
        backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        // backgroundColor: 'blue',
        borderRadius: '25px',
        border: '1px solid #B2B2B2',
        padding: theme.spacing(2),
        // marginBottom: theme.spacing(3),
        overflow: 'auto',
    },
    grid: {
        height: '100%',
    },

}));


const data = [
    {
      id: 1,
      title: 'Huarache',
      subtitle: 'Gripp',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
    },
    {
      id: 2,
      title: 'Air Max',
      subtitle: '270 P',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
    },
    {
      id: 3,
      title: 'Air Max',
      subtitle: 'Deluxe',
      image:
        // eslint-disable-next-line max-len
        'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
    },
];

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} indicators="true">
            <Carousel.Item>
                <FlashCard className="w-75"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <FlashCard className="w-75"/>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <FlashCard className="w-75"/>


                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


const Viewer = () => {
    const classes = useStyles();
    const [flashCard, setFlashCard] = useContext(FlashCardContext)

    return(
        <Container maxWidth="md" className={classes.container} >
            <Grid container className={classes.grid} spacing={5}>
                <Grid item xs={12} className={classes.grid} >
                    <Paper elevation={24} className={classes.paper} >
                        <ControlledCarousel className="h-100"/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    );
}

export default Viewer;

// <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />