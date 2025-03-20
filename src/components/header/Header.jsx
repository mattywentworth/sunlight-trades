import React from 'react';
import { Logo } from './Logo';
import { Nav } from './Nav';
import styles from './Header.module.css';

export const Header = () => {

    return (
        <header className={styles.header}>
            <Logo/>
            <Nav/>
        </header>
    )
}