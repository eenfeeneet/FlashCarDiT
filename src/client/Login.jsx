import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button} from '@material-ui/core';
import { TextField, FormControlLabel, Typography} from '@material-ui/core';
import { Box, Container, Grid, Paper} from '@material-ui/core';

import { Link } from 'react-router-dom';

import axios from 'axios';

import { SignInContext } from './SignInContext';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="/">
            {'FlashCarDiT'}
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        'html, body, #app': {
            height: '100%',
        },
    },
    borderContainer: {
        height: '100%',
        marginTop: '60px',
        [theme.breakpoints.up('md')]: {
            height: '100%',
            marginTop: '60px',
        },
    },
    paper: {
        height: '80%',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',

        [theme.breakpoints.up('md')]: {
            height: '75%',
            backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        },


    },
    formContainer: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
        width: '75%',
    },
    avatar: {
        margin: 'auto',
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState(null)
    const [passWord, setPassword] = useState(null)
    const [ [ auth, setAuth ], [currentUser, setCurrentUsers] ] = useContext(SignInContext)

    function handleFirstNameInput(){
        console.log(event.target.value)
        const inputFirstname = event.target.value
        setFirstName(inputFirstname)
    }
    function handleLastNameInput(){
        console.log(event.target.value)
        const inputLastname = event.target.value
        setLastName(inputLastname)
    }
    function handleUserNameInput(){
        console.log(event.target.value)
        const inputUsername = event.target.value
        setUserName(inputUsername)
    }

    function handlePasswordInput(){
        console.log(event.target.value)
        const inputPassword = event.target.value
        setPassword(inputPassword)
    }

    function handleSubmit () {
        const user = {
            username: userName,
            password: passWord
        };
        console.log(user)
        axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            params: user
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.error(error))

    }


    return (
        <Container className={classes.borderContainer}  maxWidth="xs">
            <Paper className={classes.paper} elevation={10}>
                <div className={classes.formContainer}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography className="text-center my-2" component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate>


                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={handleUserNameInput}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handlePasswordInput}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>



                    </form>
                    <Link to="/register" className="text-center">
                        "Don't have an account? Register Now"
                    </Link>
                </div>
                    <Copyright />
            </Paper>
        </Container>
    );
}