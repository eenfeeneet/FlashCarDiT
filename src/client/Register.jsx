import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Avatar, Button, Checkbox} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Box, Container, Grid, Paper} from '@material-ui/core';
import { TextField, FormControlLabel, Typography} from '@material-ui/core';

import { Link } from 'react-router-dom';

import { SignInContext } from './SignInContext';

import axios from 'axios';

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

export default function Register() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [userName, setUserName] = useState(null)
    const [passWord, setPassword] = useState(null)
    const [ [registered, setRegistered], [ auth, setAuth ], [currentUser, setCurrentUsers] ] = useContext(SignInContext)

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
        const initials = firstName[0] + lastName[0]
        console.log(initials)
        const user = {
            firstname: firstName,
            lastname: lastName,
            username: userName,
            initials: initials,
            password: passWord
        };
        console.log(user)
        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            params: user
        })
            .then(res => {
                console.log(res.data);
                // console.log("registered: ", registered)
                // setRegistered(res.data);
            })
            .catch(error => console.error(error))

    }


    // useEffect(() => {
    //     console.log(registered)

    // }, [] );

    return (

        <Container className={classes.borderContainer}  maxWidth="xs">
            <Paper className={classes.paper} elevation={10}>
                <div className={classes.formContainer}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography className="text-center my-2" component="h1" variant="h5">
                        Register
                    </Typography>

                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    onChange={handleFirstNameInput}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    name="lastname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    onChange={handleLastNameInput}
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            onChange={handleUserNameInput}
                        />

                        <TextField
                            margin="normal"
                            variant="outlined"
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
                            Sign Up
                        </Button>
                    </form>
                    <Link to="/login" className="text-center">
                        Already have an account? Sign in
                    </Link>

                </div>

                    <Copyright />
            </Paper>
        </Container>
    );
}