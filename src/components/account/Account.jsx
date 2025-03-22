import React from 'react';
import { Link, Outlet } from 'react-router';
import { AccountHeader } from './AccountHeader';

export const Account = () => {

    return (
        <div>
            <AccountHeader/>
            <Outlet/>
        </div>
    )
}