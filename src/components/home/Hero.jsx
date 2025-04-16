import React from 'react';
import styles from './Hero.module.css';

const heroHeaderOptions = {
    a: 'How do you keep yourself accountable with your investment decisions?',
    b: 'Do you really know if your trading decisions are reliable?',
    c: 'Are you learning from your trading successes and mistakes?',
    d: 'Do you really understand your trading decisions?',
    e: 'Do you understand your trading activity?',
    f: 'How are emotions impacting your trading activity/behavior/decisions?',
    g: 'How Is Psychology Impacting Your Trading Decisions?',
    h: 'What are you learning from your trading behavior?',
    i: 'What are you learning from your trading behavior?'
}

const heroSubHeaderOptions = {
    a: 'More than 95% of investors don\'t know their trading performance over time. And more than 99% of investors can\'t accurately recall why they made their decisions to buy and sell.',
    b: '99% of investors can\'t accurately recall why they made their last 3 buy or sell decisions. If you don\'t truly understand your trading behavior — and the impact of your emotions — how can you replicate your wins and avoid duplicating your losses?',
    c: '83% of investors are highly confident in their trading decisions, but only 13% of investors consistently outperform the market.',
    d: '99% of investors can\'t accurately recall their last 3 buy and sell decisions. How can you trade with discipline if you\'re not accountable to your own psyhology?',
}

const moreCopyOptions = {
    a: 'something about trading not being as simple as one buy and one sell decision, but many decisions within those 2 where your psychology can get in the way, and its easy to forget all of those little decisions',
    e: 'How can you repeat your wins and avoid repeating your losses if you don\'t truly understand your decision-making?',
    b: 'include a definition of post-hoc rationalization',
    c: 'include a definition of the fundamental attribution error',
    d: 'a Does This Sound Like You? section'
}

const words = ['discipline', 'rules', 'emotion', 'reliable', 'unreliable'];

export const Hero = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{heroHeaderOptions.i}</h1>
            <h2 className={styles.h2}>{heroSubHeaderOptions.d}</h2>
            <button className={styles.heroButton}>Sign Up and Join the 1%</button>
        </div>
    )
}