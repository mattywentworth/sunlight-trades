import React, { useState } from 'react';
import { Link } from 'react-router';
import styles from './AccountHeader.module.css';

export const AccountHeader = () => {

    //onClick - chnage the background color to something. onClick, if it's another element, remove the background color on
    //previus and add to new

    const [clickedId, setClickedId] = useState('test1');
    {/*const accountTabsList = document.getElementById('account-tabs').children;
    const handleTabClick = (e) => {
        const id = e.target.id;
        setClickedId(id);
    }*/}

    {/*accountTabsList.forEach(element => {
        const elementId = element.id;
        const selectedElement = document.getElementById(elementId);
        alert(elementId);
        if (elementId === idClicked) {
            selectedElement.style.backgroundColor = 'white';
            selectedElement.style.color = 'black';
        } else {
            selectedElement.style.backgroundColor = 'black';
            selectedElement.style.color = 'white';
        }
    })*/}

    const handleTabClick = (e) => {
        //alert(req.params);
        e.target.id.style.backgroundColor = 'white';
    }

    {/*const handleTabClick = (e) => {
        const idClicked = e.target.id;
        document.getElementById(idClicked).style.backgroundColor = 'white';
        const accountTabsList = document.getElementById('account-tabs').children;
        alert(accountTabsList[0].id);
        const element = document.getElementById(idClicked);
        element.style.backgroundColor = 'white';
        element.style.color = 'black';

        accountTabsList.forEach(element => {
            const elementId = element.id;
            const selectedElement = document.getElementById(elementId);
            alert(elementId);
            if (elementId === idClicked) {
                selectedElement.style.backgroundColor = 'white';
                selectedElement.style.color = 'black';
            } else {
                selectedElement.style.backgroundColor = 'black';
                selectedElement.style.color = 'white';
            }
        })

    }*/}

    return (
        <div className={styles.container}>
            <p>test</p>
            {/*<ul id='account-tabs'>
                <li id='test12'><Link to='/account/:user/summary' id='test1' onClick={handleTabClick} className={styles.test}>Summary</Link></li>
                <li><Link to='/account/:user/bought' id='test2' onClick={handleTabClick}>Bought</Link></li>
                <li><Link to='/account/:user/sold' id='test3' onClick={handleTabClick}>Sold</Link></li>
                <li><Link to='/account/:user/watched' id='test4' onClick={handleTabClick}>Watched</Link></li>
            </ul>*/}
            <div id='account-tabs'>
                <Link to='/account/:user/summary' id='test1' onClick={handleTabClick}>Summary</Link>
                <Link to='/account/:user/bought' id='test2' onClick={handleTabClick}>Bought</Link>
                <Link to='/account/:user/sold' id='test3' onClick={handleTabClick}>Sold</Link>
                <Link to='/account/:user/watched' id='test4' onClick={handleTabClick}>Watched</Link>
            </div>
        </div>
    )
}