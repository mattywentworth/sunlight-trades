import React from 'react';
import styles from './LoadingOverlay.module.css';
import { selectPendingCall } from '../../features/account/pendingCallSlice';
import { useSelector } from 'react-redux';

export const LoadingOverlay = ( {callPending} ) => {

    const pendingCall = useSelector(selectPendingCall);
    //alert(pendingCall);

    return (
        <div id="loading-overlay" className={pendingCall ? styles.containerShow : styles.containerHide}>
            <div className={styles.subContainer}>
                <p>We're updating your portfolio...</p>
                <div className={styles.logoVisual}></div>
            </div>
        </div>
    )
}