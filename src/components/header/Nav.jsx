import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router';

//Things to consider
// 1. Have an object/array in a util folder that contains all info associated with the nav links. Then import that
//  and map over it to include all relevant details

export const Nav = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to='about' className={styles.navLink}>About</NavLink></li>
                <li><NavLink to='login' className={styles.navLink}>Log In</NavLink></li>
                <li><NavLink to='signup' className={styles.navLink}>Sign Up</NavLink></li>
            </ul>
        </nav>
    )
}