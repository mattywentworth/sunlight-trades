import React from 'react';

//Things to consider
// 1. Have an object/array in a util folder that contains all info associated with the nav links. Then import that
//  and map over it to include all relevant details

export const Nav = () => {

    return (
        <nav>
            <ul>
                <li>About</li>
                <li>Log In</li>
            </ul>
        </nav>
    )
}