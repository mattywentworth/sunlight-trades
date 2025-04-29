import React from 'react';
import styles from './HomeSectionTwo.module.css';
import { SectionTwoCard } from './SectionTwoCard';

export const HomeSectionTwo = () => {

    //Source of psychology stuff: https://www.scotiafunds.com/en/home/news-insights/article.the-psychology-of-investing.html
    const testArray = [
        {
            title: 'Regret Aversion',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Familiarity Bias',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Disposition Bias',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Anchoring Bias',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Extra 1',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Extra 2',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Extra 3',
            text: 'Some extra text to take up space right now in this placeholder.'
        },
        {
            title: 'Extra 4',
            text: 'Some extra text to take up space right now in this placeholder.'
        }
    ];

    return (
        <div className={styles.container}>
            {/*<h2 className={styles.header}>Emotion dominates investing, whether you like it or not.</h2>
            <h3 className={styles.subHeader}>Have you noticed being influced by one of the concepts below?</h3>
            <h3 className={styles.subHeader}>How often are you being influenced but don't realize it?</h3>
            <div className={styles.cardContainer}>
                {testArray.map((element, index) => {
                    return <SectionTwoCard textTitle={element.title} textText={element.text} key={index} />;
                })}
            </div>*/}
            <div className={styles.columnLeft}>
                <h2 className={styles.header}>Without Sunlight Trades</h2>
                <ul className={styles.list}>
                    <li>Make investment decisions with no check on your reasoning and confidence.</li>
                    <li>Little to no documentation of your evolving analysis and decision-making while you hold, sell, or watch assets.</li>
                    <li>Human psychology clouds the true reasons for your actions, obscuring anchoring, self-attribution, loss-aversion, and more.</li>
                </ul>
            </div>
            <div className={styles.columnRight}>
                <h2 className={styles.header}>With Sunlight Trades</h2>
                <ul className={styles.list}>
                    <li>AI analyzes your rationale and potential shortcomings in your decision-making.</li>
                    <li>Every decision point requires documentation of your confidence level and a thoughtful update to your thesis.</li>
                    <li>Immutable updates and AI analysis prevent you from forgetting why you made investment decisions and how well-reasoned they were.</li>
                </ul>
            </div>
        </div>
    )
}