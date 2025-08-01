import React, { useState} from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from './Login.module.css';
import { OAuthSection } from './OAuthSection';
import { TestComponent } from './TestComponent';


export const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [usernameLength, setUsernameLength] = useState('');
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');
    const [usernameLengthValid, setUsernameLengthValid] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordLengthValid, setPasswordLengthValid] = useState(false);
    const [loginWarning, setLoginWarning] = useState('')

    const FewerThanFive = 'You typed fewer than 5 characters';
    const EqualOrMoreThanFive = 'You typed 5 or more characters';
    const match = 'Values match';
    const dontMatch = 'Values don\'nt match';

    let pLengthMessage;
    if (passwordLength < 5) {
        pLengthMessage = 'not long enough'
    } else {
        pLengthMessage = 'long enough';
    }

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        setUsernameLength(prev => prev = value.length);
        //username.length < 5 ? setUsernameLengthValid(false) : setUsernameLengthValid(true);
        usernameLength < 5 ? setUsernameMessage('❌ Valid usernames contain 5 or more characters') : setUsernameMessage('✅ You\'ve entered a valid username')
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordLength(prev => prev = value.length);
        //alert(passwordLength);
        passwordLength < 5 ? setPasswordLengthValid(false) : setPasswordLengthValid(true);
        !passwordLengthValid ? setPasswordMessage('❌ Valid passwords contain 5 or more characters') : setPasswordMessage('✅ You\'ve entered a valid password');
        //alert(password.length);
    }

    /*const handleMismatchedCredentials = (e) => {
        //username != password ? e.target.disbaled = true : e.target.disabled = false;
        if (username !== password) {
            e.target.disabled = true;
            alert('Username and Password don\'t match');
        }
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === password && username.length > 4 && password.length > 4) {
            navigate(`/account/${username}/overview/bought`);
            pendo.initialize({
                visitor: {
                    id: 12345,
                    email: 'matty@sunlighttrades.com',
                    firstName: 'Matty',
                    lastName: 'Wentworth',
                },
                account: {
                    id: 98765,
                    accountName: 'Sunlight Trades',
                    payingStatus: 'Flush With Cash',
                }
            });
        } else { //Is there any need to clearInterval?
            setLoginWarning('Invalid Credentials');
            setTimeout(() => {
                setLoginWarning('');
            }, 3000)
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Sign In To Your Account</h1>
            <p>Username and Password requirements right now:</p>
            <ul>
                <li>Log in as if you already have an account.</li>
                <li>Username and Password must match.</li>
                <li>Username and Password must be at least 5 characters long.</li>
            </ul>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor='username-log-in'>Username</label>
                <div className={styles.usernameInputContainer}>
                    <input id='username-log-in' onChange={handleUsernameChange}></input>
                    {/*<p>{usernameMessage}</p>*/}
                    <TestComponent inputLength={usernameLength} inputName={'Username'}/>
                </div>
                <label htmlFor='password-log-in'>Password</label>
                <div className={styles.passwordInputContainer}>
                    <input id='password-log-in' type='password' onChange={handlePasswordChange}></input>
                    <TestComponent inputLength={passwordLength} inputName={'Password'}/>
                </div>
                <div className={styles.submitSection}>
                    <input className={styles.submitButton} type='submit' value='Sign In'></input>
                    <p id='login-issue-message'>{loginWarning}</p>
                </div>
            </form>
            <OAuthSection/>
        </div>
    )
}