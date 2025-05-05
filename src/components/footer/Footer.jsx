import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div>Sunlight Trades</div>
            <div>Disclaimer: Sunlight Trades is not a financial advisor. Nothing on this website should be taken as financial advice.</div>
        </footer>
    )
}