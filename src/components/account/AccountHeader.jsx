import React, { useState } from 'react';
import { NavLink } from 'react-router';
import styles from './AccountHeader.module.css';

export const AccountHeader = () => {

    /*
    if i use the route param :accountTab and do param.accountTab on each 
    */

    const [clickedId, setClickedId] = useState('test1');

    //Probably a more efficient way to write this in the event that I want to make changes. Possible to do this with className and values in css module??
    const handleTabClick = ({ isActive, isPending }) => ({
        backgroundColor: isActive ? "white" : isPending ? "white" : "black",
        color: isActive ? "black" : isPending ? "black" : "white"
    })

    return (
        <div className={styles.container}>
            <ul id='account-tabs'>
                {/*<NavLink to='/account/:user/summary' id='test1' style={handleTabClick}>Summary</NavLink>*/}
                <NavLink to='/account/:user/bought' id='test2' style={handleTabClick}>Bought</NavLink>
                <NavLink to='/account/:user/sold' id='test3' style={handleTabClick}>Sold</NavLink>
                <NavLink to='/account/:user/watched' id='test4' style={handleTabClick} className={styles.test}>Watched</NavLink>
            </ul>
        </div>
    )
}