import React, { Fragment, useContext } from 'react';
import { hot } from 'react-hot-loader';


import Dashboard from './components/dashboard/dashboard';
import Viewer from './components/viewer/viewer';

import {SignInContext} from './SignInContext';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({

    paper: {
        height: 'calc(100% - 64px)',
    },
    '@global': {
        'html, body, #app': {
            height: '100%',
        },
        '.content-main': {
            height: 'calc(100% - 64px)',
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const [auth, setAuth] = useContext(SignInContext);


    if(!auth){
        return (
            <Dashboard/>
        );
    } else{
        return (
            <Dashboard/>
        );
    }

}