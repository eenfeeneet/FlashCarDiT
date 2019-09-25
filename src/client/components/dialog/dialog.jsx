import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Decks from '../decks/decks';
import Carousel from '../carousel/carousel';


const useStyles = makeStyles(theme => ({

    container: {
        height: '50vh',
        width: '75%',
        margin: '0 auto'

    },
    btnContainer: {
        height: '50vh',
        width: '75%',
        margin: '0 auto'

    },
    paper: {
        height: '100%',
        backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        // backgroundColor: '#ffffff',
        borderRadius: '25px',
        border: '1px solid #B2B2B2',
        // border: `2px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(2),
        overflow: 'auto',
    },
    gridList: {
    width: '100%',
    height: '100%',
  },
}));
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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

const Dialogs = ({handleOpen, handleClose, stateOpen, deck}) => {
    const classes = useStyles();

  return (

    <Dialog fullWidth={true} maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={stateOpen} disableBackdropClick={false}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {deck.topic}
        </DialogTitle>

        <DialogContent dividers>
            <div className={classes.container}>
                <Carousel data={deck.cards}/>
            </div>

        </DialogContent>

        {/*<DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>*/}
    </Dialog>

  );
}

export default Dialogs;


 // <Typography gutterBottom>
 //            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
 //            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
 //          </Typography>
 //          <Typography gutterBottom>
 //            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
 //            lacus vel augue laoreet rutrum faucibus dolor auctor.
 //          </Typography>
 //          <Typography gutterBottom>
 //            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
 //            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
 //            auctor fringilla.
 //          </Typography>