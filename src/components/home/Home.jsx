import React from 'react';
import { Hero } from './Hero';
import { HomeSectionTwo } from './HomeSectionTwo';
import { HomeSectionThree } from './HomeSectionThree';
import { HomePlaceholder } from '../placeholders/HomePlaceholder';
import styles from './Home.module.css';

export const Home = () => {

    return (
        <div className={styles.container}>
            <Hero/>
            <HomeSectionTwo/>
            <HomeSectionThree/>
        </div>
    )
}