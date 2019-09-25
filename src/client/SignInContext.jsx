import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';


export const SignInContext = createContext();

export const SignInProvider = (props) => {
    const { children } = props;

    const [registered, setRegistered] = useState(false);
    const [auth, setAuth] = useState(false);
    const [currentUser, setCurrentUsers] = useState(false);



    useEffect(() => {
        console.log(registered)
        console.log(auth)

    }, [registered, auth] );


    return(
        <SignInContext.Provider value={[ [registered, setRegistered], [auth, setAuth], [currentUser, setCurrentUsers] ]}>
            {children}
        </SignInContext.Provider>

    );
}

SignInProvider.propTypes = {
    children: PropTypes.node,
};