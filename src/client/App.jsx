import React, { useContext, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Login from './Login';
import Register from './Register';
import DashBoard from './components/dashboard/dashboard';
import MenuSideBar from './components/menusidebar/menusidebar';

import { FlashCardContext } from './FlashCardContext';
import { SignInContext } from './SignInContext';


const useStyles = makeStyles(theme => ({

    container: {
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
    },

}));

function App() {
    const classes = useStyles();
    const [[auth, setAuth]] = useContext(SignInContext);

    useEffect(() => {
        const checkCookie = document.cookie
        // console.log("current cookies", checkCookie)
        const userLoggedIn = checkCookie.includes("userId")

        if(userLoggedIn){
            // setAuth(!auth)

            console.log("++++++++++")
            console.log("User is logged in")
            // console.log("Account Authenticated: ", auth)
            console.log("++++++++++")

        } else {
            console.log("no user logged in")
        }

    }, [] );

    return (
        <div className={`row h-100 ${classes.container}`} >
            <Router>
                <Switch>
                    <Route path="/" exact component={MenuSideBar}/>
                    <Route path="/login" render={() => ( auth ?  <Redirect to="/" /> : <Login /> )} />
                    <Route path="/register" render={() => ( registered ?  <Redirect to="/login" /> : <Register /> )} />
                    {/*<Route path="/login"  component={Login}/>
                    <Route path="/register" component={Register} />*/}
                    <Route path="/test" component={MenuSideBar} />

                </Switch>
            </Router>
        </div>
    );
}

export default hot(module)(App);