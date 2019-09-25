import React, { useContext, useEffect} from 'react';

import Menu from 'react-burger-menu/lib/menus/pushRotate';
// import styles from './style.css';

import DashBoard from '../dashboard/dashboard';
import Login from '../../Login';

import { Link } from 'react-router-dom';

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '40px',
        height: '30px',
        left: '20px',
        top: 'calc((100vh / 2) + 15px)',
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
}

class MenuSideBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    // useEffect(() => {
    //     const checkCookie = document.cookies.usrLogged
    //     console.log(checkCookie)
    //     const hashedUserLogged = sha256('loggedout' + SALT);

    //     if(checkCookie === hashedUserLogged){
    //         console.log("no user logged in")
    //     } else(checkCookie === undefined){
    //         console.log("no cookie detected")
    //     }

    // }, [] );

    showSettings (event) {
        event.preventDefault();
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render () {
        return (
            <div className="w-100" id="outer-container" >
                <Menu
                    styles={ styles }
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }
                    width={ '300px' }
                    isOpen={this.state.menuOpen}
                    noOverlay
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </Menu>
                <main id="page-wrap">
                    <DashBoard/>
                </main>
            </div>
        );
    }
}

export default MenuSideBar;