import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';


export const SignInContext = createContext();

export const SignInProvider = (props) => {
    const { children } = props;

    const [auth, setAuth] = useState(false);
    const [currentUser, setCurrentUsers] = useState(false);



    // useEffect(() => {
    //     if(auth){
    //        alert("user signed in")
    //     }

    // }, []);


    return(
        <SignInContext.Provider value={[auth, setAuth]}>
            {children}
        </SignInContext.Provider>

    );
}

SignInProvider.propTypes = {
    children: PropTypes.node,
};