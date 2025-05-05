import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { AccountHeader } from './AccountHeader';
import { Summary } from './Summary';
import { LoadingOverlay } from './LoadingOverlay';
import styles from './Account.module.css';
//import { selectPendingCall } from '../../features/account/pendingCallSlice';
//import { useSelector } from 'react-redux';


export const Account = () => {

    //const [callPending, setCallPending] = useState(false);
    //const pendingCall = useSelector(selectPendingCall);

    return (
        <div className={styles.container}>
            {/*<Summary/>*/}
            {/*<AccountHeader/>*/}
            <LoadingOverlay />
            <Outlet />
        </div>
    )
}