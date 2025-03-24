import React from 'react';
import styles from './HomeSectionThree.module.css';
import { Link } from 'react-router';

export const HomeSectionThree = () => {

    return (
        <div className={styles.container}>
            <div className={styles.textOne}>Will you pretend to understand how emotions impact the way you invest your money?</div>
            <div className={styles.textTwo}>Or will you hold yourself accountable and make more reliable decisions?</div>
            <div className={styles.textTwo}>Use Sunlight Trades to document your thoughts and behaviors and learn from them...</div>
            <div className={styles.textThree}>Because Sunlight is the best disinfectant.</div>
            <button><Link to='/signup'>Sign Up For Free</Link></button>
        </div>
    )
}