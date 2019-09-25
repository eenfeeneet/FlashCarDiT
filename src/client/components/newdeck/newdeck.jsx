import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { Container, Paper} from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';

import { FlashCardContext } from '../../FlashCardContext';

import NewDeckForm from '../newdeckform/newdeckform';
import NewCardForm from '../newcardform/newcardform';
import NewDeckFinal from '../newdeckfinal/newdeckfinal';


const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    container: {
        // height: 'auto',
        height: '100%',
        padding: theme.spacing(3),
    },
    paper: {
        height: '100%',
        backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(2),
        // marginBottom: theme.spacing(3),
        overflow: 'auto',
    },

    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),

    },
}));

function getSteps() {
  return ['Create Deck', 'Create Flash Cards', 'Save'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
          return <NewDeckForm />;
        case 1:
          return <NewCardForm/>;
        case 2:
          return <NewDeckFinal/>;
        default:
          return <NewDeckFinal/>;
    }
}

function StepperCustom({activeStep, steps}){
    return (
                <div className="col-9 mx-auto">
                    <Stepper activeStep={activeStep} style={{backgroundColor: 'transparent'}} alternativeLabel>
                        {steps.map(label => (
                            <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
    )
}

function EndMessage({handleReset}){
    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-9 mx-auto h-75">
                    <Typography className={classes.instructions}>All steps completed</Typography>
                </div>
            </div>
            <div className="row h-25">
                <div className="col-9 mx-auto">
                    <Button onClick={handleReset()}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default function NewDeck() {
    const classes = useStyles();
    const [[allDecks, setAllDecks],,, [isCardCreated, setIsCardCreated], [isDeckCreated, setIsDeckCreated]] = useContext(FlashCardContext);

    const [activeStep, setActiveStep] = useState(0);

    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        if(isDeckCreated){
            setIsDeckCreated({ isDeckCreated: !isDeckCreated})
        }
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        if(isCardCreated){
            setIsCardCreated(!isCardCreated)
        }
    }

    function handleReset() {
        setActiveStep(0);
    }

    useEffect(() => {
        console.log("Is Deck Created", isDeckCreated)
        console.log("Is Card Created", isCardCreated)


    }, [isDeckCreated, isCardCreated] );

    return (
        <Container className={classes.container} >
            <Paper elevation={10} className={classes.paper} >
                <div className="container h-100">
                    <div className="row h-25">
                        <StepperCustom activeStep={activeStep} steps={steps}/>
                    </div>

                    <div className="row h-75">
                        {activeStep === steps.length ? (
                            <EndMessage handleReset={handleReset}/>
                        ) : (
                            <div className="container h-100">
                                <div className="row h-75">
                                    <div className="col-9 mx-auto my-auto h-100">
                                        {getStepContent(activeStep)}
                                    </div>
                                </div>
                                <div className="row h-25">
                                    <div className="col-9 mx-auto my-auto d-flex justify-content-center h-50">
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
                                        </Button>


                                        {isDeckCreated ?
                                            (
                                                <Button variant="contained" color="primary" onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            ) : (
                                                <Button variant="contained" color="primary" disabled onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            )
                                        }


                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Paper>
        </Container>
    );
}





// {isDeckCreated ?
//     (
//         <Button variant="contained" color="primary" onClick={handleNext}>
//             {'Next'}
//         </Button>
//     ) : (
//         <Button variant="contained" color="primary" disabled>
//             {'Next'}
//         </Button>
//     )
// }

// {isCardCreated ?
//     (
//         <Button variant="contained" color="primary" onClick={handleNext}>
//             {'Next'}
//         </Button>
//     ) : (
//         <Button variant="contained" color="primary" disabled>
//             {'Next'}
//         </Button>
//     )
// }