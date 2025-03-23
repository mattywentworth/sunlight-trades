import React from 'react';
import { Link, Outlet } from 'react-router';
import { AccountHeader } from './AccountHeader';
import { Summary } from './Summary';
import styles from './Account.module.css';

export const Account = () => {

    return (
        <div className={styles.container}>
            <Summary/>
            {/*<AccountHeader/>*/}
            <Outlet/>
        </div>
    )
}