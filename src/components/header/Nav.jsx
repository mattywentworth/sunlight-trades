import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router';

//Things to consider
// 1. Have an object/array in a util folder that contains all info associated with the nav links. Then import that
//  and map over it to include all relevant details



export const Nav = () => {
    /* Need to tweak this to work on styling of the NavLinks
    const handleTabClick = ({isActive, isPending}) => ({
        backgroundColor: isActive ? "gold" : isPending ? "black" : "black"
    })
    */
    return (
        <nav>
            <ul>
                <li className={styles.about}><NavLink to='about' className={styles.navLinkAbout} id='nav-about'>About</NavLink></li>
                <li className={styles.account}><NavLink to='login' className={styles.navLinkLogIn} id='nav-log-in'>Log In</NavLink></li>
                <li className={styles.account}><NavLink to='signup' className={styles.navLinkSignUp} id='nav-sign-up'>Sign Up</NavLink></li>
            </ul>
        </nav>
    )
}