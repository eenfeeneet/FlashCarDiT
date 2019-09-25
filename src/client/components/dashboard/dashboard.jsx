import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import { Container, Paper} from '@material-ui/core';



import Decks from '../decks/decks';
import NewDeck from '../newdeck/newdeck';
import Viewer from '../viewer/viewer';
import ViewerTwo from '../viewertwo/viewer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {children}
        </Container>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: '100%',
    },
    container: {
        height: '100vh',
        paddingTop: '20px',
        paddingBottom: '40px',
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            padding: '50px 25px',
        },
    },
    paper: {
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        // border: '1px solid #2E8B57',
        border: `2px solid ${theme.palette.primary.main}`,

    },

    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        margin: 'auto 0',
    },
    tab: {
        margin: '20px 0',
        fontSize: '15px'
    },
    panel: {
        width: '100%',
        height: '100%',
    },
    listcontainer: {
        height: '100%',
    }
}));

export default function DashBoard() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Container maxWidth="lg" className={`container ${classes.container}`} >
            <Paper elevation={20} className={classes.paper} >
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                    >
                        <Tab className={classes.tab} label="Decks" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="New Deck" {...a11yProps(1)} />
                    </Tabs>



                    <TabPanel className={classes.panel} value={value} index={0}>
                        <Decks />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <NewDeck />
                    </TabPanel>

                </div>

            </Paper>
        </Container>
    );
}