import React from 'react';
import styles from './Logo.module.css';
import { Link } from 'react-router';

export const Logo = () => {

    return (
        <div className={styles.logo}>
            <Link to='/' className={styles.link}>
                <div className={styles.logoName}>SUNLIGHT TRADES</div>
                <div className={styles.logoVisual}></div>
            </Link>
        </div>
    )
}