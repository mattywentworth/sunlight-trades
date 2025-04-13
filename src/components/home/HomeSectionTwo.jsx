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
            <h2 className={styles.header}>Emotion dominates investing, whether you like it or not.</h2>
            <h3 className={styles.subHeader}>Have you noticed being influced by one of the concepts below?</h3>
            <h3 className={styles.subHeader}>How often are you being influenced but don't realize it?</h3>
            <div className={styles.cardContainer}>
                {testArray.map(element => {
                    return <SectionTwoCard textTitle={element.title} textText={element.text} />;
                })}
            </div>
        </div>
    )
}