import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './style.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { FlashCardProvider } from './FlashCardContext.jsx';
import { SignInProvider } from './SignInContext.jsx';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#696969',
        },
        secondary: {
            light: '#C1B8B8',
            main: '#dd2c00',
            contrastText: '#ffcc00',
        },
    },
    '@global': {
        'html, body, #app': {
            height: '100vh',
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <SignInProvider>
            <FlashCardProvider>
                <App />
            </FlashCardProvider>
        </SignInProvider>
    </MuiThemeProvider>,
    document.getElementById('app')
);