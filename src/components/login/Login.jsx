import React, { useState} from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';


export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === password && username.length > 3) {
            navigate('/account');
        } else {
            alert('invalid credentials');
        }
    }

    return (
        <div>
            <div>Sign In To Your Account</div>
            <form onSubmit={handleSubmit}>
                <p>{username}</p>
                <p>{password}</p>
                <label htmlFor='username-log-in'>Username</label>
                <input id='username-log-in' onChange={handleUsernameChange}></input>
                <label htmlFor='password-log-in'>Password</label>
                <input id='password-log-in' type='password' onChange={handlePasswordChange}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}