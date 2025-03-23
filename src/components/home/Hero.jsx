import React from 'react';
import styles from './Hero.module.css';

const heroHeaderOptions = {
    a: 'How do you keep yourself accountable with your investment decisions?',
    b: 'Do you really know if your trading decisions are reliable?',
    c: 'Are you learning from your trading successes and mistakes?',
    d: 'Do you really understand your trading decisions?',
    e: 'Do you understand your own trading activity?'
}

const heroSubHeaderOptions = {
    a: 'More than 95% of investors don\'t know their trading performance over time. And more than 99% of investors can\'t accurately recall why they made their decisions to buy and sell.',
    b: '99% of investors can\'t accurately recall why they made their last 3 buy or sell decisions. If you don\'t truly understand your trading behavior, how can you replicate your wins and avoid duplicating your losses?'
}

const moreCopyOptions = {
    a: 'How can you repeat your wins and avoid repeating your losses if you don\'t truly understand your decision-making?',
    b: 'include a definition of post-hoc rationalization',
    c: 'include a definition of the fundamental attribution error',
    c: 'a Does This Sound Like You? section'
}

export const Hero = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{heroHeaderOptions.e}</h1>
            <h2 className={styles.h2}>{heroSubHeaderOptions.b}</h2>
            <button>Learn how to leave the 1% with Sunlight Trades</button>
        </div>
    )
}